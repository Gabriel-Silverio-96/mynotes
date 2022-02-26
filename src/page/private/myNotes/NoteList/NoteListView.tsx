import { INote } from "common/types/_MyNotes/notes";
import Loading from "components/Loading";
import NoNotesCreated from "components/NoNotesCreated";
import NoteCard from "components/NoteCard";
import React from "react";
import { LoadingWrapper, NoteList } from "./styled";
import { INoteList } from "./types/types.component";

const NoteListView: React.FC<INoteList> = (props) => {
    const { notes, isLoading, noNotesCreated, openDialogDeleteThisNote, openDialogEditNote } = props;

    return (
        <div>
            <LoadingWrapper>
                <Loading isLoading={isLoading} messageLoading="Loading" />
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
                            editNote={() => openDialogEditNote(note.note_id!)}
                        />
                    ))}
            </NoteList>
            {noNotesCreated && !isLoading && <NoNotesCreated />}
        </div>
    )
}

export default NoteListView;