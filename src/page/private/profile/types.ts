import { ChangeEvent, FormEvent } from "react"

export type UserData = {
    full_name: string;
    email: string;
}

export interface GetUserData {
    data: UserData;
    status: number;
}

export interface InputRequiredProps {
    message_erro_input_required: string;
}

export type ErrorMessage = {
    message_erro_input_full_name: string;
    message_error:  string;
}

export interface IProfile {
    theme: any;    
    isLoading: boolean
    errorMessage: ErrorMessage
    saveData: (e: FormEvent<HTMLFormElement>) => void;
    userData: UserData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}