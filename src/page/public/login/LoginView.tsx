import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import FormContainer from "components/FormContainer";
import Input from "components/FormFields/Input";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { ReCAPTCHAContainer } from "./styled";
import { ILogin } from "./type";

const LoginView: React.FC<ILogin> = (props) => {
    const { isLoading, handleChange, errorInputMessage, login, recaptchaRef } = props;
    return (
        <FormContainer title="Login">
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
                <ReCAPTCHAContainer>
                    <ReCAPTCHA
                        sitekey="6LfhbFEfAAAAACNL5ZqGABgYbLjjF3_VyWuxylLl"
                        ref={recaptchaRef}
                    />
                </ReCAPTCHAContainer>
                <Button
                    title="Login"
                    isLoading={isLoading}
                    type="submit"
                    disabled={isLoading}
                    data-testid="button-login"
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