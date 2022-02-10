import { IErrorInputMessage } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import { ChangeEvent, FormEvent } from "react";

export interface ILogin {
    isLoading: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    errorInputMessage: IErrorInputMessage[];
    login: (e: FormEvent<HTMLFormElement>) => void;
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