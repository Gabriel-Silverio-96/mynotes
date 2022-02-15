import { ChangeEvent } from "react";

type TypeInputProps = "text" | "number" | "email" | "date" | "password";

export interface IInput {
    label: string;
    name: string;
    defaultValue?: string;
    id: string;
    typeInput: TypeInputProps;
    erroMessage?: string | string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    isLoadingData?: boolean;
}