import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import Loading from "components/Loading";
import MessageFormError from "components/MessageFormError";
import React from "react";
import { Link } from "react-router-dom";

const LoginView: React.FC<any> = (props) => {
    const { isLoading, handleForm, errorMessage, Login } = props;
    return (
        <Layout themeSwitch={false}>
            <FormGeneric title="Login" widthModal="25rem" isHeaderActive={true} isActiveBack={true}>
                <MessageFormError
                    message={errorMessage.message_erro}
                />
                <form method="POST" onSubmit={Login} >

                    <Input
                        typeInput="email"
                        name="email"
                        label="Email"
                        id="email"
                        onChange={handleForm}
                        erroMessage={errorMessage.message_erro_input_email}
                    />
                    <Input
                        typeInput="password"
                        name="password"
                        label="Password"
                        id="password"
                        onChange={handleForm}
                        erroMessage={errorMessage.message_erro_input_password}
                    />

                    <Button
                        title={isLoading ? <Loading isLoading={true} justIcon align="center" /> : "Sign in"}
                        type="submit"
                        disabled={isLoading ? true : false}
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