
export interface IContextMyNotes {    
    noteIdSelected: string;
    setNoteIdSelected: React.Dispatch<React.SetStateAction<string>>;

    noteEditIdSelected: string;
    setNoteEditIdSelected: React.Dispatch<React.SetStateAction<string>>;

    noNotesCreated: boolean;
    setNoNotesCreated: React.Dispatch<React.SetStateAction<boolean>>;
     
    isOpenDialogCreateNote: boolean;
    setOpenDialogCreateNote: React.Dispatch<React.SetStateAction<boolean>>;

    isOpenDialogEditNote: boolean;
    setIsOpenDialogEditNote: React.Dispatch<React.SetStateAction<boolean>>;

    isOpenDialogDeleteThisNote: boolean;
    setOpenDialogDeleteThisNote: React.Dispatch<React.SetStateAction<boolean>>;

    isOpenDialogDeleteAllNotes: boolean;
    setOpenDialogDeleteAllNotes: React.Dispatch<React.SetStateAction<boolean>>;

    refreshRequest: boolean;
    setRefreshRequest: React.Dispatch<React.SetStateAction<boolean>>;
}