
export interface IContextMyNotes { 
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