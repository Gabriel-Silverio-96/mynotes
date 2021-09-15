import { ChangeEvent, FormEvent } from "react";

export type noteEditDataProps = {
    id: number;
    colorNote: string;
    titleNote: string;
    observation: string;
}

export interface ModalMainProps<T> {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onChange: (e: ChangeEvent<T>) => void;
    noteEditData: noteEditDataProps
    deleteNote: () => void;
    titleNoteErro: string;
}