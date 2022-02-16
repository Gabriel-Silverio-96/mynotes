import { IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import { ChangeEvent, FormEvent } from "react";

export type TEditNote = Omit<INote, "created_at" | "note_id">;

export interface IDialogEditNote {
    editNote: INote;
    errorInputMessage: IErrorInputMessage[];
    onClose: () => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoadingEdit: boolean;
    isLoadingData: boolean;
    open: boolean;
    openDialogDeleteThisNoteInDialogEditNote:() => void;
}