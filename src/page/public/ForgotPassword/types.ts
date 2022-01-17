import { ChangeEvent, FormEvent } from "react";

export interface UserData {
    email: string;
}

export interface IForgotPasswordView {
    alertMessage: string;
    isSendingMessage: boolean;
    errorMessage: {
        message_erro_input_email: string;
    }
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    ForgotPassowordRequest: (e: FormEvent<HTMLFormElement>) => void;    
    userData: UserData;
    isLoading: boolean;
}