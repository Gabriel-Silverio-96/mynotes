import { ISnackBarResponse } from "common/types/SnackBar";

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