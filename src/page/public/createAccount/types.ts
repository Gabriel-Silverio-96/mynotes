import { IErrorInputMessage } from "common/types/ErrorResponse";
import { ChangeEvent, FormEvent } from "react";

export interface ICreateAccount {
    createAccount: (e: FormEvent<HTMLFormElement>) => void;
    errorInputMessage: IErrorInputMessage[];
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IUserData {
    full_name: string;
    email: string;
    password: string;
}