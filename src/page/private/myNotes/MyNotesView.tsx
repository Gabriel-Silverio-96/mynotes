import Header from "components/Header/index";
import Layout from "components/Layout";
import Loading from "components/Loading";
import ModalDelete from "components/ModalDelete";
import ModalMain from "components/ModalMain";
import NoNotes from "components/NoNotes";
import NoteCard from "components/NoteCard";
import React from "react";
import DialogCreateNote from "./DialogCreateNote";
import DialogDeleteNote from "./DialogDeleteNote";
import DialogDelete from "./DialogDeleteNote";
import { NoteCardWrapper } from "./styled";
import { IMyNotes, NotesListProps } from "./types";

const MyNotesPageView: React.FC<any> = (props) => {
    const {
        noNotesCreated,
        showModalDelete,
        modalState,
        isLoadingSaveEdit,
        saveNote,
        handleChange,
        noteEditData,
        noteIdSelected,
        inputRequired,
        modalDelete,
        isLoadingDelete,
        deleteThisNote,
        deleteAllNotes,
        showModalViewEditNote,

        noteList,
        isLoadingNote,

        isOpenDialogCreateNote,
        openDialogCreateNote,
        closeDialogCreateNote,
        handleChangeCreateNote,
        createNoteSubmit,

        errorInputMessage,
        isLoadingRequest

    } = props

    return (
        <Layout>
            <Header
                thereAreNotes={noNotesCreated}
                showModalDeleteAllNote={() => showModalDelete("deleteAll")}
                isActiveNav={true}
                openDialogCreateNote={openDialogCreateNote}
            />

            <DialogCreateNote 
                open={isOpenDialogCreateNote}
                onClose={closeDialogCreateNote}
                onSubmit={createNoteSubmit}
                handleChange={handleChangeCreateNote}
                errorInputMessage={errorInputMessage}
                isLoading={isLoadingRequest}
            />

            <DialogDeleteNote />

            {
                modalState && (
                    <ModalMain
                        isLoadingSaveEdit={isLoadingSaveEdit}
                        onSubmit={saveNote}
                        onChange={handleChange}
                        noteEditData={noteEditData}
                        deleteNote={() => showModalDelete("delete", noteIdSelected)}
                        titleNoteErro={inputRequired.message_erro_input_required}
                    />
                )
            }

            {
                modalDelete.isActive && (
                    <ModalDelete
                        isLoadingDelete={isLoadingDelete}
                        title={
                            modalDelete.modalType === "delete"
                                ? "Delete note"
                                : "Delete all note"
                        }
                        body={
                            modalDelete.modalType === "delete"
                                ? "Do you want to delete this note?"
                                : "Do you want to delete all note?"
                        }
                        actionMain={
                            modalDelete.modalType === "delete"
                                ? () => deleteThisNote()
                                : () => deleteAllNotes()
                        }
                    />
                )
            }

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
                            showModalDeleteThisNote={() => showModalDelete("delete", note.note_id!)}
                            viewEditNote={() => showModalViewEditNote(note.note_id!)}
                        />
                    ))}

                {noNotesCreated && !isLoadingNote && <NoNotes />}

            </NoteCardWrapper>
        </Layout>
    )
}

export default MyNotesPageView;