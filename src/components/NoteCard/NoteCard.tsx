import React from "react";
import NoteCard2View from "./NoteCardView";
import { INoteCard } from "./types/types.component";

const NoteCard2: React.FC<INoteCard> = (props) => {
    const { colorNote, editNote, id, observation, openDialogDeleteThisNote, titleNote } = props;
    return <NoteCard2View {... { colorNote, editNote, id, observation, openDialogDeleteThisNote, titleNote }} />
}

export default NoteCard2;