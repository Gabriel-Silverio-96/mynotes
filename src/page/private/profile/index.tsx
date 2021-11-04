import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import dark from "assets/styles/themes/dark";
import useThemeStorage from "util/useThemeStorage";

import Layout from "components/Layout";
import Header from "components/Header";
import FormGeneric from "components/FormGeneric";
import Input from "components/FormFields/Input";
import { ButtonPrimary } from "components/UI/Button";
import apiMyNotes from "service/apiMyNotes";
import { GetUserData, UserData } from "./types";
import { AxiosError } from "axios";
import { useHistory } from "react-router";
import MessageFormError from "components/MessageFormError";

const Profile: React.FC = () => {
    const history = useHistory();

    const [theme] = useThemeStorage("theme", dark);
    const [userData, setUserData] = useState({} as UserData);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_full_name: "",
        message_error: "",
    })

    useEffect(() => {
        const getUserData = async () => {
            setIsLoading((prevState) => !prevState);
            try {
                const { data, status } = await apiMyNotes.get("/auth/account") as GetUserData;
                if (status === 200) {
                    setUserData(data);
                    setIsLoading((prevState) => !prevState);
                }
            } catch (error) {
                const errorMessage = error as AxiosError;
                const status = errorMessage.response!.status;

                if (status === 401) {
                    localStorage.removeItem("token");
                    apiMyNotes.defaults.headers!.Authorization = "";
                    history.push("/");
                }

                if (status === 500) {
                    history.push("/");
                }
            }
        }
        getUserData()
    }, [history])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const saveData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage({
            message_erro_input_full_name: "",
            message_error: "",
        })
        try {
            const { status } = await apiMyNotes.put("auth/account", userData);
            if (status === 200) {
                history.push("/mynotes")
            }
        } catch (error) {
            const errorMessage = error as AxiosError;
            const { message_erro_input_full_name, message_erro } = errorMessage.response!.data as any;
            const status = errorMessage.response!.status;

            if (status === 422) {
                setErrorMessage({
                    message_erro_input_full_name,
                    message_error: "",
                })
            }

            if (status === 403) {
                setErrorMessage({
                    message_erro_input_full_name: "",
                    message_error: message_erro
                })
            }
        }
    }

    return (
        <Layout themeStyle={theme}>
            <Header themeTitle={theme.title} isActiveNav={false} />
            {isLoading && (
                <FormGeneric
                    title="Profile"
                    widthModal="25rem"
                    isHeaderActive={false}
                >
                    <MessageFormError
                        message={errorMessage.message_error}
                    />
                    <form method="put" onSubmit={saveData}>
                        <Input
                            label="Full name"
                            typeInput="text"
                            id="full_name"
                            name="full_name"
                            defaultValue={userData.full_name}
                            onChange={handleChange}
                            erroMessage={errorMessage.message_erro_input_full_name}
                        />
                        <Input
                            label="Email"
                            typeInput="email"
                            id="email"
                            name="email"
                            defaultValue={userData.email}
                            disabled={true}
                        />

                        <ButtonPrimary type="submit" title="Save" />
                    </form>
                </FormGeneric>
            )}
        </Layout>
    )
}

export default Profile;