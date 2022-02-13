import { IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";

export interface IContextMyNotes {
    createNote: INote;
    setCreateNote: React.Dispatch<React.SetStateAction<INote>>;

    errorInputMessage: IErrorInputMessage[];
    setErrorInputMessage: React.Dispatch<React.SetStateAction<IErrorInputMessage[]>>;

    isLoadingRequest: boolean;
    setIsLoadingRequest: React.Dispatch<React.SetStateAction<boolean>>;

    noNotesCreated: boolean;
    setNoNotesCreated: React.Dispatch<React.SetStateAction<boolean>>;

    isOpenDialogDeleteThisNote: boolean;
    setOpenDialogDeleteThisNote: React.Dispatch<React.SetStateAction<boolean>>;

    isOpenDialogDeleteAllNotes: boolean; 
    setOpenDialogDeleteAllNotes: React.Dispatch<React.SetStateAction<boolean>>;

    isOpenDialogCreateNote: boolean;
    setOpenDialogCreateNote: React.Dispatch<React.SetStateAction<boolean>>;

    noteIdSelected: string; 
    setNoteIdSelected: React.Dispatch<React.SetStateAction<string>>;

    refreshRequest: boolean; 
    setRefreshRequest: React.Dispatch<React.SetStateAction<boolean>>;
}