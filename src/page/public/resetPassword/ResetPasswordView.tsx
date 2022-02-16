import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import React from "react";
import { Link } from "react-router-dom";
import { SendingMessage } from "./styled";
import { IResetPassword } from "./types";

const ResetPasswordView: React.FC<IResetPassword> = (props) => {
    const {
        resetPasswordSuccessfully,
        errorInputMessage,
        handleChange,
        isLoading,
        resetPassword
    } = props;
    return (
        <Layout themeSwitch={false}>
            <FormGeneric title="Reset password" widthModal="25rem" isHeaderActive={true} isActiveBack={false}>

                {!resetPasswordSuccessfully ? (
                    <>
                        <p>Enter your new password with at least 8 characters</p>
                        <form method="post" onSubmit={resetPassword}>
                            <Input
                                id="password"
                                label="New password"
                                name="password"
                                typeInput="password"
                                onChange={handleChange}
                                errorMessage={errorInputMessage.length > 0 ? errorInputMessage[0].msg : ""}
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