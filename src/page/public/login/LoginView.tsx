import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import FormContainer from "components/FormContainer";
import Input from "components/FormFields/Input";
import React from "react";
import { Link } from "react-router-dom";
import { ILogin } from "./type";

const LoginView: React.FC<ILogin> = (props) => {
    const { isLoading, handleChange, errorInputMessage, login } = props;
    return (
        <FormContainer title="Login">
            <form method="POST" onSubmit={login} >
                <Input
                    typeInput="email"
                    name="email"
                    label="Email"
                    id="email"
                    onChange={handleChange}
                    data-cy="input-email"
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
                    data-cy="input-password"
                    errorMessage={
                        errorInputMessage.map((errorInputResponse: IErrorInputMessage) => (
                            errorInputResponse.param === "password" ? errorInputResponse.msg : ""
                        ))
                    }
                />
                <Button
                    title="Login"
                    isLoading={isLoading}
                    type="submit"
                    disabled={isLoading}
                    data-testid="button-login"
                    data-cy="button-login"
                />
                <div style={{ marginTop: "1rem" }}>
                    <Link to="/auth/forgot-password">
                        Forgot password?
                    </Link>
                </div>
            </form>
        </FormContainer>
    )
}

export default LoginView;