import { FormEvent } from "react";

export interface IDialogCreateNote {
    onClose: () => void;
    handleChange: () => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}