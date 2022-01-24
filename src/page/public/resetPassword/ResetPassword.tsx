import { AxiosError } from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router";
import apiMyNotes from "service/apiMyNotes";
import ResetPasswordView from "./ResetPasswordView";
import { MessageTokenError, Params } from "./types";

const ResetPassword: React.FC = () => {
    const { token } = useParams<Params>();
    const [resetPasswordSuccessfully, setResetPasswordSuccessfully] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
            setIsLoading(true);
            const { status } = await apiMyNotes.post(`auth/reset-password/token=${token}`, newPassword);
            if (status === 200) {
                setResetPasswordSuccessfully(prevState => !prevState);
                setIsLoading(false);
            }

        } catch (error) {
            setIsLoading(false);
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

    return <ResetPasswordView {... { resetPasswordSuccessfully, alertMessage, errorMessage, handleChange, isLoading, ResetPasswordRequest }} />
}

export default ResetPassword;