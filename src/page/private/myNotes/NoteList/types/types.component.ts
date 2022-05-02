import { INote } from "common/types/myNotes/notes";

export interface INoteList {
    notes: INote[];
    isLoading: boolean;
    noNotesCreated: boolean;
    openDialogDeleteThisNote: (noteId: string) => void;
    openDialogEditNote: (noteId: string) => void;
}

export interface INoteListData {
    list_notes: INote[] | [];
    status: number;
}