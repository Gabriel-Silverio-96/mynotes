import React from "react";

import { FiEye, FiTrash2 } from "react-icons/fi";
import Button from "components/Button";

import { NoteCardContainer, NoteCardHeader, NoteCardButton, NoteCardBody } from "./styled";
import { NoteCardProps } from "./types";

const NoteCard: React.FC<NoteCardProps> = (props) => {
    return (
        <NoteCardContainer colorNote={props.colorNote}>
            <NoteCardHeader>
                <h3>
                    {
                        props.titleNote.length > 40
                            ? `${props.titleNote.substr(0, 40)}...`
                            : props.titleNote
                    }
                </h3>

                <NoteCardButton>

                    <Button
                        id={props.id}
                        onClick={props.showModalDeleteThisNote}
                        variant="delete"
                        size="small"
                        iconButton={<FiTrash2 size={15} />}
                    />

                    <Button
                        onClick={props.viewEditNote}
                        size="small"
                        iconButton={<FiEye size={15} />}
                    />
                </NoteCardButton>
            </NoteCardHeader>

            <NoteCardBody>
                <p>
                    {
                        props.observation.length > 130
                            ? `${props.observation.substr(0, 130)}...`
                            : props.observation
                    }
                </p>
            </NoteCardBody>

        </NoteCardContainer>
    );
}

export default NoteCard;
