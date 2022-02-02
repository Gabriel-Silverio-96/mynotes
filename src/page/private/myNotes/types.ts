import { ModalDeleteProps } from "provider/types";
import { ChangeEvent, FormEvent } from "react";

export interface NoteProps {
    id: number;
    colorNote: string;
    titleNote: string;
    observation: string;
}

export interface NotesListProps {
    note_id?: string;
    color_note: string;
    title_note: string;
    observation: string;
    created_at?: string;
}

export interface RequestProps {
    data: {
        list_notes: NotesListProps[] | [];
    }
    status: number;
}

export interface RequestDeleteProps {
    status: number;
    message: string;
    type_message: string;
}

export interface InputRequiredProps {
    message_erro_input_required: string;
}

export interface IMyNotes {
    noNotesCreated: boolean;
    showModalDelete: (modalType: "delete" | "deleteAll", noteId?: string) => void;
    modalState: boolean;
    isLoadingSaveEdit: boolean;
    saveNote: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    noteEditData: NotesListProps;
    noteIdSelected: string;
    inputRequired: InputRequiredProps;
    modalDelete: ModalDeleteProps;
    isLoadingDelete: boolean;
    deleteThisNote: () => void;
    deleteAllNotes: () => void;
    isLoading: boolean;
    notesList: NotesListProps[];
    showModalViewEditNote: (noteId: string) => void;
}