import { FormEvent } from "react";

export interface IDialogForm {
    method?: "get" | "post" ;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}