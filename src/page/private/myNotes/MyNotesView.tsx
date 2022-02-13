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
        isOpenDialogCreateNote,
        openDialogCreateNote,
        closeDialogCreateNote,
        handleChangeCreateNote,
        errorInputMessage,
        isLoadingRequest,
        isOpenDialogDeleteThisNote,
        closeDialogDeleteThisNote,
        isOpenDialogDeleteAllNotes,
        openDialogDeleteAllNotes,
        closeDialogDeleteAllNotes,
    } = props

    return (
        <Layout>
            <Header
                thereAreNotes={noNotesCreated}
                openDialogDeleteAllNotes={openDialogDeleteAllNotes}
                isActiveNav={true}
                openDialogCreateNote={openDialogCreateNote}
            />

            <DialogCreateNote
                open={isOpenDialogCreateNote}
                onClose={closeDialogCreateNote}
                handleChange={handleChangeCreateNote}
                errorInputMessage={errorInputMessage}
                isLoading={isLoadingRequest}
            />

            <DialogDeleteThisNote
                open={isOpenDialogDeleteThisNote}
                onClose={closeDialogDeleteThisNote}
            />

            <DialogDeleteAllNotes
                open={isOpenDialogDeleteAllNotes}
                onClose={closeDialogDeleteAllNotes}
            />     

            <NoteList />           
        </Layout>
    )
}

export default MyNotesPageView;