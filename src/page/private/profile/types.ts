import { IErrorInputMessage } from "common/types/ErrorResponse"
import { ChangeEvent, FormEvent } from "react"

export type IUserData = {
    full_name: string;
    email: string;
}

export interface IProfile {
    theme: any;    
    isLoadingData: boolean;
    isLoadingRequestEditing: boolean;
    errorInputMessage: IErrorInputMessage[];    
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    userData: IUserData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}