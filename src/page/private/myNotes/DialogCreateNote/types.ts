import { IErrorInputMessage } from "common/types/ErrorResponse";
import { ChangeEvent, FormEvent } from "react";

export interface IDialogCreateNote {
    open: boolean;
    onClose: () => void;
    handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoading?: boolean;
    errorInputMessage?: IErrorInputMessage[];
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}