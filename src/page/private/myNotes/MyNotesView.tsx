import Header from "components/Header/index";
import Layout from "components/Layout";
import Loading from "components/Loading";
import NoNotes from "components/NoNotes";
import NoteCard from "components/NoteCard";
import React from "react";
import DialogCreateNote from "./DialogCreateNote";
import DialogDeleteNote from "./DialogDeleteThisNote";
import { NoteCardWrapper } from "./styled";
import { NotesListProps } from "./types";

const MyNotesPageView: React.FC<any> = (props) => {    
    const {
        noNotesCreated,
        noteList,
        isLoadingNote,

        isOpenDialogCreateNote,
        openDialogCreateNote,
        closeDialogCreateNote,
        handleChangeCreateNote,

        errorInputMessage,
        isLoadingRequest,

        isOpenDialogDeleteThisNote,
        openDialogDeleteThisNote,
        closeDialogDeleteThisNote

    } = props

    return (
        <Layout>
            <Header
                thereAreNotes={noNotesCreated}
                showModalDeleteAllNote={() => ""}
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

            <DialogDeleteNote
                open={isOpenDialogDeleteThisNote}
                onClose={closeDialogDeleteThisNote}
            />

            <div style={{ marginBottom: "1rem" }}>
                <Loading isLoading={isLoadingNote} messageLoading="Loading" />
            </div>

            <NoteCardWrapper>
                {noteList.length > 0 && !noNotesCreated &&
                    noteList.map((note: NotesListProps) => (
                        <NoteCard
                            key={note.note_id}
                            id={note.note_id}
                            colorNote={note.color_note}
                            titleNote={note.title_note}
                            observation={note.observation}
                            showModalDeleteThisNote={() => openDialogDeleteThisNote(note.note_id)}
                            viewEditNote={() => ""}
                        />
                    ))}

                {noNotesCreated && !isLoadingNote && <NoNotes />}

            </NoteCardWrapper>
        </Layout>
    )
}

export default MyNotesPageView;