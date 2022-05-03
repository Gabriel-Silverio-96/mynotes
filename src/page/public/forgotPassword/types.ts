import { IErrorInputMessage } from "common/types/errorResponse";
import { ChangeEvent, FormEvent } from "react";

export interface IUserData {
    email: string;
}

export interface IForgotPasswordView {
    errorInputMessage: IErrorInputMessage[];
    isSendingMessage: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    forgotPassoword: (e: FormEvent<HTMLFormElement>) => void;
    userData: IUserData;
    isLoading: boolean;
}