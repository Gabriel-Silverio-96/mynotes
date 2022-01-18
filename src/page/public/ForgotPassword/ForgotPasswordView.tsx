import Button from "components/Button";
import Input from "components/FormFields/Input";
import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import MessageFormError from "components/MessageFormError";
import React from "react";
import { Link } from "react-router-dom";
import { SendingMessage } from "./styled";
import { IForgotPasswordView } from "./types";

export default function ForgotPasswordView(props: IForgotPasswordView) {
    const { alertMessage, isSendingMessage, errorMessage, handleChange, ForgotPassowordRequest, userData, isLoading } = props;
    return (
        <Layout themeSwitch={false}>
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

                            <Button type="submit" title="Send" isLoading={isLoading} messageLoading="Sending" />
                        </form>
                    </>
                ) : (
                    <SendingMessage>
                        <p>An email is on its way to
                            <strong> {userData.email} </strong>
                            with instructions for reset your password.
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