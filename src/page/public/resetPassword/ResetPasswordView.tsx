import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import MessageFormError from "components/MessageFormError";
import React from "react";
import { Link } from "react-router-dom";
import { SendingMessage } from "./styled";
import { IResetPasswordView } from "./types";

const ResetPasswordView: React.FC<IResetPasswordView> = (props) => {
    const {
        resetPasswordSuccessfully,
        alertMessage,
        errorMessage,
        handleChange,
        isLoading,
        ResetPasswordRequest
    } = props;
    return (
        <Layout themeSwitch={false}>
            <FormGeneric title="Reset password" widthModal="25rem" isHeaderActive={true} isActiveBack={false}>

                {!resetPasswordSuccessfully ? (
                    <>
                        <p>Enter your new password with at least 8 characters</p>
                        <MessageFormError message={alertMessage} />
                        <form method="post" onSubmit={ResetPasswordRequest}>
                            <Input
                                id="password"
                                label="New password"
                                name="password"
                                typeInput="password"
                                onChange={handleChange}
                                erroMessage={errorMessage.message_erro_input_password}
                            />
                            <Button title="Save" type="submit" isLoading={isLoading} />
                        </form>
                    </>
                ) : (
                    <SendingMessage>
                        <p>
                            Your password has been reset successfully 😊
                        </p>
                        <Link to="/auth/login">
                            <Button title="Back to login" />
                        </Link>
                    </SendingMessage>
                )}

            </FormGeneric>
        </Layout>
    )
}

export default ResetPasswordView;