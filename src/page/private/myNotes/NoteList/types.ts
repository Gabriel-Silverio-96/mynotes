import { INote } from "common/types/_MyNotes/notes";

export interface INoteList {
    notes: INote[];
    isLoadingNote: boolean;
    noNotesCreated: boolean;
    openDialogDeleteThisNote: (noteId: string) => void;
}

export interface INoteListData {
    list_notes: INote[] | [];
    status: number;
}