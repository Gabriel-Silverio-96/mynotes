import { AxiosError } from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import apiMyNotes from "service/apiMyNotes";
import ForgotPasswordView from "./ForgotPasswordView";
import { UserData } from "./types";

export default function ForgotPassword() {
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isSendingMessage, SetIsSendingMessage] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState({
        message_erro_input_email: "",
    });

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
            setIsLoading(true)
            const { status } = await apiMyNotes.post("auth/forgot-password", userData);
            if (status === 200) {
                SetIsSendingMessage(true);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
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
    };

    return (
        <ForgotPasswordView
            {...{ alertMessage, isSendingMessage, errorMessage, handleChange, ForgotPassowordRequest, userData, isLoading }}
        />
    )
}