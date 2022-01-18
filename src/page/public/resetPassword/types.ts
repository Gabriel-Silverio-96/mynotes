import { ChangeEvent, FormEvent } from "react";

export interface Params {
    token: string;
}

export interface MessageTokenError {
    err: {
        message: string;
    }
}

export interface IResetPasswordView {
    resetPasswordSuccessfully: boolean;
    isLoading: boolean;
    alertMessage: string;
    errorMessage: {
        message_erro_input_password: string;
    }
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    ResetPasswordRequest: (e: FormEvent<HTMLFormElement>) => void;
}