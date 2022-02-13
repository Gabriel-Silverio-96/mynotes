import { IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import React, { createContext, useState } from "react";
import { IContextMyNotes } from "./types";

export const ContextMyNotes = createContext({} as IContextMyNotes);

export const CREATE_NOTE_INITIAL_STATE: INote = { color_note: "#9C10FF", title_note: "", observation: "" };

export const ContextMyNotesProvider: React.FC = ({ children }) => {
    const [createNote, setCreateNote] = useState<INote>(CREATE_NOTE_INITIAL_STATE);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);
    const [noNotesCreated, setNoNotesCreated] = useState<boolean>(true);

    const [isOpenDialogCreateNote, setOpenDialogCreateNote] = useState<boolean>(false);
    const [isOpenDialogDeleteThisNote, setOpenDialogDeleteThisNote] = useState<boolean>(false);
    const [isOpenDialogDeleteAllNotes, setOpenDialogDeleteAllNotes] = useState<boolean>(false);
    const [noteIdSelected, setNoteIdSelected] = useState<string>("");

    const [refreshRequest, setRefreshRequest] = useState<boolean>(false);

    return (
        <ContextMyNotes.Provider value={
            {
                createNote,
                setCreateNote,

                errorInputMessage,
                setErrorInputMessage,

                isLoadingRequest,
                setIsLoadingRequest,
                
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