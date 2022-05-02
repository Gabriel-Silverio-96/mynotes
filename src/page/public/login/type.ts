import { IErrorInputMessage } from "common/types/errorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { ChangeEvent, FormEvent } from "react";

export interface ILogin {
    isLoading: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    errorInputMessage: IErrorInputMessage[];
    login: (e: FormEvent<HTMLFormElement>) => void;
    recaptchaRef?: any;
}

export interface ILoginInputs {
    email: string;
    password: string;
}

export interface ILoginResponse extends ISnackBarResponse {
    token: string;
    user_data: {
        full_name: string;
    }
}