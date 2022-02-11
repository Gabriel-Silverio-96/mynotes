import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IDataMessageResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import apiMyNotes from "service/apiMyNotes";
import ResetPasswordView from "./ResetPasswordView";
import { INewPasswordInputs, Params } from "./types";

const RESET_PASSWORD_INPUTS_INITIAL_STATE: INewPasswordInputs = { password: "" };

const ResetPassword: React.FC = () => {
    const dispatch = useDispatch();
    const { token } = useParams<Params>();

    const [resetPasswordSuccessfully, setResetPasswordSuccessfully] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<INewPasswordInputs>(RESET_PASSWORD_INPUTS_INITIAL_STATE);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewPassword({ password: value });
    }

    const resetPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoading(true);

        try {
            const { data } = await apiMyNotes.post(`auth/reset-password/token=${token}`, newPassword) as AxiosResponse<IDataMessageResponse>;
            setResetPasswordSuccessfully(prevState => !prevState);
            setIsLoading(false);
            dispatch(snackBar(true, data.message, data.type_message));
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) setErrorInputMessage(data.errors);
            if (status === 403 || status === 500) dispatch(snackBar(true, data.message, data.type_message));

            return setIsLoading(false);
        }
    }

    return <ResetPasswordView {... { resetPasswordSuccessfully, errorInputMessage, handleChange, isLoading, resetPassword }} />
}

export default ResetPassword;