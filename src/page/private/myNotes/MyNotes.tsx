import React, { useContext } from "react";
import useDialogMynotes from "./common/hooks/useDialogMynotes";
import { ContextMyNotes } from "./Context/MyNotes";
import MyNotesPageView from "./MyNotesView";

const MyNotesPage: React.FC = () => {
    const {
        openDialogCreateNote,
        openDialogDeleteThisNote,
        closeDialogDeleteThisNote,
        openDialogDeleteAllNotes,
        closeDialogDeleteAllNotes 
    } = useDialogMynotes();
    
    const {
        noNotesCreated,
        isOpenDialogDeleteThisNote,
        isOpenDialogDeleteAllNotes,
    } = useContext(ContextMyNotes);

    return (
        <MyNotesPageView {... {
            noNotesCreated,
            openDialogCreateNote,
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