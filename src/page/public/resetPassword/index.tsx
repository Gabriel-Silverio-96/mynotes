import React, { ChangeEvent, FormEvent, useState } from "react";
import Layout from "components/Layout";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { AxiosError } from "axios";
import apiMyNotes from "service/apiMyNotes";

import FormGeneric from "components/FormGeneric";
import Input from "components/FormFields/Input";
import { ButtonPrimary } from "components/UI/Button";

import { MessageTokenError, Params } from "./types";
import MessageFormError from "components/MessageFormError";

import { SendingMessage } from "./styled";

const ResetPassword: React.FC = () => {
    const { token } = useParams<Params>();
    const [resetPasswordSuccessfully, setResetPasswordSuccessfully] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const [newPassword, setNewPassword] = useState({
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_password: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewPassword({
            password: value
        })
    }

    const ResetPasswordRequest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_password: ""
        })
        setAlertMessage("")
        try {
            const { status } = await apiMyNotes.post(`auth/reset-password/token=${token}`, newPassword);
            if (status === 200) {
                setResetPasswordSuccessfully(prevState => !prevState);
            }

        } catch (error) {
            const errorLog = error as AxiosError;
            const status = errorLog.response!.status;

            if (status === 400 || status === 422) {
                const { message_erro_input_password } = errorLog.response!.data;
                setErrorMessage({
                    message_erro_input_password
                })
            }

            if (status === 500) {
                const messageTokenError = errorLog.response!.data as MessageTokenError;
                setAlertMessage(messageTokenError.err.message);
            }
        }
    }

    return (
        <Layout>
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
                            <ButtonPrimary title="Save" type="submit" />
                        </form>
                    </>
                ) : (
                    <SendingMessage>
                        <p>
                            Your password has been reset successfully 😊
                        </p>
                        <Link to="/auth/login">
                            <ButtonPrimary title="Back to login" />
                        </Link>
                    </SendingMessage>
                )}

            </FormGeneric>
        </Layout>
    )
}

export default ResetPassword;
