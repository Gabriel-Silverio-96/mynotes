import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import apiMyNotes from "service/apiMyNotes";

import FormGeneric from "components/FormGeneric";
import Layout from "components/Layout";
import MessageFormError from "components/MessageFormError";
import Input from "components/FormFields/Input";
import { ButtonPrimary } from "components/UI/Button";

import { UserData } from "./types";
import { AxiosError } from "axios";

const CreateAccount: React.FC = () => {
    const history = useHistory();
    const [alertMessage, setAlertMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_email: "",
        message_erro_input_password: "",
        message_erro_input_full_name: "",
    })

    const [userData, setUserData] = useState<UserData>({
        full_name: "",
        email: "",
        password: ""
    });

    const createAccount = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_email: "",
            message_erro_input_password: "",
            message_erro_input_full_name: ""
        })
        setAlertMessage("");
        try {
            const { status } = await apiMyNotes.post("/auth/create-account", userData);

            if (status === 201) {
                history.push("/auth/login")
            }
        } catch (error) {
            const errorLog = error as AxiosError;
            const status = errorLog.response!.status;
            const { message_erro_input_email,
                message_erro_input_password,
                message_erro_input_full_name,
                message_erro } = errorLog.response!.data;

            if (status === 422) {
                setErrorMessage({
                    message_erro_input_email,
                    message_erro_input_password,
                    message_erro_input_full_name,
                })
            }

            if (status === 403) {
                setAlertMessage(message_erro)
            }
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [name]: value
        })
    }
    return (
        <Layout>
            <FormGeneric
                title="Create account"
                widthModal="25rem"
                isHeaderActive={true}
                isActiveBack={true}
            >
                <MessageFormError
                    message={alertMessage}
                />

                <form method="post" onSubmit={createAccount}>
                    <Input
                        label="Full name"
                        typeInput="text"
                        id="full_name"
                        name="full_name"
                        onChange={handleChange}
                        erroMessage={errorMessage.message_erro_input_full_name}
                    />
                    <Input
                        label="Email"
                        typeInput="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        erroMessage={errorMessage.message_erro_input_email}
                    />
                    <Input
                        label="Password"
                        typeInput="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        erroMessage={errorMessage.message_erro_input_password}
                    />

                    <ButtonPrimary type="submit" title="Create" />
                </form>
            </FormGeneric>
        </Layout>
    )
}

export default CreateAccount
