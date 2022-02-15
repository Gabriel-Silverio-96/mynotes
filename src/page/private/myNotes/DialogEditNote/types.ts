import { IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import { ChangeEvent } from "react";

export type TEditNote = Omit<INote, "created_at" | "note_id">;

export interface IDialogEditNote {
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoadingEdit: boolean;
    isLoadingData: boolean;
    errorInputMessage: IErrorInputMessage[];
    editNote: TEditNote;
    onClose: () => void;
}