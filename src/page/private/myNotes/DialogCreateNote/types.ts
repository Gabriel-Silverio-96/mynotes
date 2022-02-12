import { IErrorInputMessage } from "common/types/ErrorResponse";
import { FormEvent } from "react";

export interface IDialogCreateNote {
    open: boolean;
    onClose: () => void;
    handleChange: () => void;
    isLoading: boolean;
    errorInputMessage: IErrorInputMessage[];
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}