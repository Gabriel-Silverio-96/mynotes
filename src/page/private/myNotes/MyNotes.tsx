import React, { ChangeEvent, useContext } from "react";
import useDialogMynotes from "./common/hooks/useDialogMynotes";
import { ContextMyNotes } from "./Context/MyNotes";
import MyNotesPageView from "./MyNotesView";

const MyNotesPage: React.FC = () => {
    const {
        openDialogCreateNote,
        closeDialogCreateNote,
        openDialogDeleteThisNote,
        closeDialogDeleteThisNote,
        openDialogDeleteAllNotes,
        closeDialogDeleteAllNotes 
    } = useDialogMynotes();
    
    const {
        createNote,
        setCreateNote,
        setNoNotesCreated,
        isLoadingRequest,
        noNotesCreated,
        isOpenDialogDeleteThisNote,
        isOpenDialogCreateNote,
        noteIdSelected,
        isOpenDialogDeleteAllNotes,
    } = useContext(ContextMyNotes);

    const handleChangeCreateNote = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreateNote({
            ...createNote,
            [e.target.name]: e.target.value
        })
    }

    return (
        <MyNotesPageView {... {
            noNotesCreated,
            noteIdSelected,
            setNoNotesCreated,

            isOpenDialogCreateNote,
            openDialogCreateNote,
            closeDialogCreateNote,
            handleChangeCreateNote,

            isLoadingRequest,

            isOpenDialogDeleteThisNote,
            openDialogDeleteThisNote,
            closeDialogDeleteThisNote,

            isOpenDialogDeleteAllNotes,
            openDialogDeleteAllNotes,
            closeDialogDeleteAllNotes,
        }} />

    )
}

export default MyNotesPage;