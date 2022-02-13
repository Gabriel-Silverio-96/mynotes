import { INote } from "common/types/_MyNotes/notes";
import Loading from "components/Loading";
import NoNotes from "components/NoNotes";
import NoteCard from "components/NoteCard";
import React from "react";
import { LoadingWrapper, NoteList } from "./styled";
import { INoteList } from "./types";

const NoteListView: React.FC<INoteList> = (props) => {
    const { notes, isLoadingNote, noNotesCreated, openDialogDeleteThisNote } = props;

    return (
        <div>
            <LoadingWrapper>
                <Loading isLoading={isLoadingNote} messageLoading="Loading" />
            </LoadingWrapper>
            <NoteList>
                {notes.length > 0 && !noNotesCreated &&
                    notes.map((note: INote) => (
                        <NoteCard
                            key={note.note_id}
                            id={note.note_id}
                            colorNote={note.color_note}
                            titleNote={note.title_note}
                            observation={note.observation}
                            openDialogDeleteThisNote={() => openDialogDeleteThisNote(note.note_id!)}
                            editNote={() => ""}
                        />
                    ))}
            </NoteList>
            {noNotesCreated && !isLoadingNote && <NoNotes />}
        </div>
    )
}

export default NoteListView;