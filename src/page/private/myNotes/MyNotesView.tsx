import Header from "components/Header/index";
import Layout from "components/Layout";
import React from "react";
import DialogCreateNote from "./DialogCreateNote";
import DialogDeleteAllNotes from "./DialogDeleteAllNotes";
import DialogDeleteThisNote from "./DialogDeleteThisNote";
import NoteList from "./NoteList";

const MyNotesPageView: React.FC<any> = (props) => {
    const {
        noNotesCreated,
        openDialogCreateNote,
        openDialogDeleteAllNotes,
    } = props;

    return (
        <Layout>
            <Header
                thereAreNotes={noNotesCreated}
                openDialogDeleteAllNotes={openDialogDeleteAllNotes}
                isActiveNav={true}
                openDialogCreateNote={openDialogCreateNote}
            />

            <DialogCreateNote />
            <DialogDeleteThisNote />
            <DialogDeleteAllNotes />

            <NoteList />           
        </Layout>
    )
}

export default MyNotesPageView;