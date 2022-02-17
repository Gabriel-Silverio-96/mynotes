import { IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import { ChangeEvent } from "react";

export type TEditNote = Omit<INote, "created_at" | "note_id">;

export interface IDialogEditNote {
    editNote: INote;
    errorInputMessage: IErrorInputMessage[];
    onClose: () => void;
    putEditNote: () => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoadingEdit: boolean;
    isLoadingData: boolean;
    isOpenDialogEditNote: boolean;
    openDialogDeleteThisNoteInDialogEditNote: () => void;
}