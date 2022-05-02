import { IErrorInputMessage } from "common/types/errorResponse";
import { ChangeEvent, FormEvent } from "react";

export interface Params {
    token: string;
}

export interface INewPasswordInputs {
    password: string;
}

export interface IResetPassword {
    resetPasswordSuccessfully: boolean;
    isLoading: boolean;
    errorInputMessage: IErrorInputMessage[];
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    resetPassword: (e: FormEvent<HTMLFormElement>) => void;
}