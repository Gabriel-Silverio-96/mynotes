import React, { useContext } from "react";
import useDialogMynotes from "./common/hooks/useDialogMynotes";
import { ContextMyNotes } from "./Context/MyNotes";
import MyNotesPageView from "./MyNotesView";

const MyNotesPage: React.FC = () => {
    const { openDialogCreateNote, openDialogDeleteAllNotes } = useDialogMynotes();
    const { noNotesCreated } = useContext(ContextMyNotes);

    return (
        <MyNotesPageView {... {
            noNotesCreated,
            openDialogCreateNote,
            openDialogDeleteAllNotes,
        }} />
    )
}

export default MyNotesPage;