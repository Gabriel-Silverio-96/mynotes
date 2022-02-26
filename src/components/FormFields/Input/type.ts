import { IErrorInputMessage } from "common/types/ErrorResponse";
import { ChangeEvent, InputHTMLAttributes } from "react";

type TypeInputProps = "text" | "number" | "email" | "date" | "password";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    defaultValue?: string;
    id: string;
    typeInput: TypeInputProps;
    errorMessage?: string | IErrorInputMessage[] | string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    isLoadingData?: boolean;
    isVisiblePassword: boolean;
    visiblePassword: () => void;
    messageLoading?: string;
}