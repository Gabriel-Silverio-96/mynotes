import { AxiosError, AxiosResponse } from "axios";
import { IDataErrorResponse, IDataMessageResponse, IErrorInputMessage } from "common/types/errorResponse";
import React, { ChangeEvent, FormEvent, useState } from "react";
import apiMyNotes from "service/apiMyNotes";
import ForgotPasswordView from "./ForgotPasswordView";
import { IUserData } from "./types";

const USER_DATA_INPUT_INITIAL_STATE = { email: "" };

const ForgotPassword: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
	const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
	const [userData, setUserData] = useState<IUserData>(USER_DATA_INPUT_INITIAL_STATE);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [name]: value });
	};

	const forgotPassoword = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorInputMessage([]);
		setIsLoading(true);

		try {
            await apiMyNotes.post("auth/forgot-password", userData) as AxiosResponse<IDataMessageResponse>;
            setIsSendingMessage(true);
		} catch (err) {
			const error = err as AxiosError;
			const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;
			if (status === 400) setErrorInputMessage(data.errors);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<ForgotPasswordView
			{...{ isSendingMessage, errorInputMessage, handleChange, forgotPassoword, userData, isLoading }}
		/>
	);
};

export default ForgotPassword;