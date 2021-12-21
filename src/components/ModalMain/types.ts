import { ChangeEvent, FormEvent } from "react";

type NoteEditData = {
    color_note: string;
    title_note: string;
    observation: string;
    created_at?: string;
}

export interface ModalMainProps<T> {
    isLoadingSaveEdit: boolean;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onChange: (e: ChangeEvent<T>) => void;
    noteEditData: NoteEditData;
    deleteNote: () => void;
    titleNoteErro: string;    
}