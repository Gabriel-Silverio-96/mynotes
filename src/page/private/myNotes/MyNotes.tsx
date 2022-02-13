import React, { useContext } from "react";
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
        noNotesCreated,
        isOpenDialogDeleteThisNote,
        isOpenDialogCreateNote,
        isOpenDialogDeleteAllNotes,
    } = useContext(ContextMyNotes);

    return (
        <MyNotesPageView {... {
            noNotesCreated,
            isOpenDialogCreateNote,
            openDialogCreateNote,
            closeDialogCreateNote,
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