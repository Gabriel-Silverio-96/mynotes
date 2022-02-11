import { FormEvent } from "react";

export interface IDialogCreateNote {
    open: boolean;
    onClose: () => void;
    handleChange: () => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}