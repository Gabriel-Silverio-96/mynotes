import { IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import React, { createContext, useState } from "react";

export const ContextMyNotes = createContext({} as any);

export const DIALOG_DELETE_NOTE_INITIAL_STATE = { delete_just_one_note: true, open: false };
export const CREATE_NOTE_INITIAL_STATE = { color_note: "#9C10FF", title_note: "", observation: "" };

export const ContextMyNotesProvider = (props: any) => {
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
            {props.children}
        </ContextMyNotes.Provider>
    )
}