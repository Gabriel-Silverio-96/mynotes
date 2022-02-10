import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IDataMessageResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import ForgotPasswordView from "./ForgotPasswordView";
import { IUserData } from "./types";

const USER_DATA_INPUT_INITIAL_STATE = { email: "" };

const ForgotPassword: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [userData, setUserData] = useState<IUserData>(USER_DATA_INPUT_INITIAL_STATE);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    const forgotPassoword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoading(true);

        try {
            const { data } = await apiMyNotes.post("auth/forgot-password", userData) as AxiosResponse<IDataMessageResponse>;
            setIsSendingMessage(true);
            setIsLoading(false);
            dispatch(snackBar(true, data.message, data.type_message));
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) setErrorInputMessage(data.errors);
            if (status === 403 || status === 500) dispatch(snackBar(true, data.message, data.type_message));

            return setIsLoading(false);
        }
    };

    return (
        <ForgotPasswordView
            {...{ isSendingMessage, errorInputMessage, handleChange, forgotPassoword, userData, isLoading }}
        />
    )
}

export default ForgotPassword;