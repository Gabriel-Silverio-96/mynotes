import Button from "components/Button";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { NoteCardBody, NoteCardButton, NoteCard, NoteCardHeader } from "./styled";
import { INoteCard } from "./types";

const NoteCardView: React.FC<INoteCard> = (props) => {
    const { colorNote, editNote, id, observation, openDialogDeleteThisNote, titleNote } = props;
    return (
        <NoteCard colorNote={colorNote}>
            <NoteCardHeader>
                <h3>
                    {
                        titleNote.length > 40
                            ? `${titleNote.substring(0, 40)}...`
                            : titleNote
                    }
                </h3>

                <NoteCardButton>
                    <Button
                        id={id}
                        onClick={openDialogDeleteThisNote}
                        variant="delete"
                        size="small"
                        iconButton={<FiTrash2 size={15} />}
                    />

                    <Button
                        onClick={editNote}
                        size="small"
                        iconButton={<FiEye size={15} />}
                    />
                </NoteCardButton>
            </NoteCardHeader>

            <NoteCardBody>
                <p>
                    {
                        observation.length > 130
                            ? `${observation.substring(0, 130)}...`
                            : observation
                    }
                </p>
            </NoteCardBody>
        </NoteCard>
    )
}

export default NoteCardView;