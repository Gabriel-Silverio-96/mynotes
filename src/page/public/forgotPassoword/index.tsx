import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import apiMyNotes from "service/apiMyNotes";
import { AxiosError } from "axios";

import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import MessageFormError from "components/MessageFormError";
import Input from "components/FormFields/Input";
import { ButtonPrimary } from "components/UI/Button";

import { SendingMessage } from "./styled";
import { UserData } from "./types";

const ForgotPassoword: React.FC = () => {
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isSendingMessage, SetIsSendingMessage] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_email: "",
    })

    const [userData, setUserData] = useState<UserData>({
        email: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    const ForgotPassowordRequest = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_email: ""
        })

        setAlertMessage("");

        try {
            const { status } = await apiMyNotes.post("auth/forgot-password", userData);
            if (status === 200) {
                SetIsSendingMessage(true)
            }
        } catch (error) {
            const errorLog = error as AxiosError;
            const status = errorLog.response!.status;
            console.log(errorLog.response!);

            if (status === 400 || status === 422) {
                const { message_erro_input_email } = errorLog.response!.data;
                setErrorMessage({
                    message_erro_input_email
                })
            }

            if (status === 401) {
                const { message_erro } = errorLog.response!.data;
                setAlertMessage(message_erro)
            }
        }
    }
    return (
        <Layout>
            <FormGeneric
                title={!isSendingMessage ? "Forgot password" : "Check your email"}
                widthModal="25rem"
                isHeaderActive={true}
                isActiveBack={!isSendingMessage ? true : false}
            >
                {!isSendingMessage ? (
                    <>
                        <p>Which email is registered on MyNotes</p>
                        <MessageFormError
                            message={alertMessage}
                        />
                        <form method="post" onSubmit={ForgotPassowordRequest}>
                            <Input
                                label="Email"
                                typeInput="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                erroMessage={errorMessage.message_erro_input_email}
                            />

                            <ButtonPrimary type="submit" title="Send" />
                        </form>
                    </>
                ) : (
                    <SendingMessage>
                        <p>An email is on its way to
                            <strong> {userData.email} </strong>
                            with instructions for reset your password.
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

export default ForgotPassoword;
