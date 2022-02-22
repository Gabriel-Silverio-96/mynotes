import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormContainer from "components/FormContainer";
import React from "react";
import { Link } from "react-router-dom";
import { SendingMessage } from "./styled";
import { IForgotPasswordView } from "./types";

const ForgotPasswordView: React.FC<IForgotPasswordView> = (props) => {
    const { isSendingMessage, errorInputMessage, handleChange, forgotPassoword, userData, isLoading } = props;
    return (
        <FormContainer title={!isSendingMessage ? "Forgot password" : "Check your email"} disabledButtonBack={isLoading}>
            {!isSendingMessage ? (
                <>
                    <p>Which email is registered on MyNotes</p>
                    <form method="post" onSubmit={forgotPassoword}>
                        <Input
                            label="Email"
                            typeInput="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            errorMessage={
                                errorInputMessage.map((errorInputMessage: IErrorInputMessage) => (
                                    errorInputMessage.param === "email" ? errorInputMessage.msg : ""
                                ))
                            }
                        />

                        <Button type="submit" title="Send" isLoading={isLoading} messageLoading="Sending" />
                    </form>
                </>
            ) : (
                <SendingMessage>
                    <p>An email is on its way to
                        <strong> {userData.email} </strong>
                        with instructions for reset your password.
                    </p>                    
                </SendingMessage>
            )}
        </FormContainer>
    )
}

export default ForgotPasswordView;