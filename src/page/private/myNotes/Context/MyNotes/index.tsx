import React, { createContext, useState } from "react";
import { IContextMyNotes } from "./types";

export const ContextMyNotes = createContext({} as IContextMyNotes);

export const ContextMyNotesProvider: React.FC = ({ children }) => {    
    const [noteIdSelected, setNoteIdSelected] = useState<string>("");
    const [noNotesCreated, setNoNotesCreated] = useState<boolean>(true);

    const [isOpenDialogCreateNote, setOpenDialogCreateNote] = useState<boolean>(false);
    const [isOpenDialogDeleteThisNote, setOpenDialogDeleteThisNote] = useState<boolean>(false);
    const [isOpenDialogDeleteAllNotes, setOpenDialogDeleteAllNotes] = useState<boolean>(false);

    const [refreshRequest, setRefreshRequest] = useState<boolean>(false);

    return (
        <ContextMyNotes.Provider value={
            {          
                noNotesCreated, 
                setNoNotesCreated,
                
                isOpenDialogDeleteThisNote,
                setOpenDialogDeleteThisNote,

                isOpenDialogDeleteAllNotes,
                setOpenDialogDeleteAllNotes,

                isOpenDialogCreateNote,
                setOpenDialogCreateNote,

                noteIdSelected,
                setNoteIdSelected,

                refreshRequest,
                setRefreshRequest
            }
        }
        >
            {children}
        </ContextMyNotes.Provider>
    )
}