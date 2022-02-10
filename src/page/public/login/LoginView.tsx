import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import Loading from "components/Loading";
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
                        erroMessage={
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
                        erroMessage={
                            errorInputMessage.map((errorInputResponse: IErrorInputMessage) => (
                                errorInputResponse.param === "password" ? errorInputResponse.msg : ""
                            ))
                        }
                    />
                    <Button
                        title={isLoading ? <Loading isLoading={true} justIcon align="center" /> : "Sign in"}
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