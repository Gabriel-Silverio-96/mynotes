import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import React from "react";
import { Link } from "react-router-dom";
import { ILogin } from "./type";

const LoginView: React.FC<ILogin> = (props) => {
    const { isLoading, handleChange, errorInputMessage, login } = props;
    return (
        <Layout themeSwitch={false}>
            <FormGeneric title="Login" widthModal="25rem" isHeaderActive={true} isActiveBack={true}>
                <form method="POST" onSubmit={login} >
                    <Input
                        typeInput="email"
                        name="email"
                        label="Email"
                        id="email"
                        onChange={handleChange}
                        errorMessage={
                            errorInputMessage.map((errorInputResponse: IErrorInputMessage) => (
                                errorInputResponse.param === "email" ? errorInputResponse.msg : ""
                            ))
                        }
                    />
                    <Input
                        typeInput="password"
                        name="password"
                        label="Password"
                        id="password"
                        onChange={handleChange}
                        errorMessage={
                            errorInputMessage.map((errorInputResponse: IErrorInputMessage) => (
                                errorInputResponse.param === "password" ? errorInputResponse.msg : ""
                            ))
                        }
                    />
                    <Button
                        title="Sing in"
                        isLoading={isLoading}
                        type="submit"
                        disabled={isLoading}
                    />
                    <div style={{ marginTop: "1rem" }}>
                        <Link to="/auth/forgot-password">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </FormGeneric>
        </Layout>
    )
}

export default LoginView;