import React from "react";

import { NoteCardContainer, NoteCardHeader, NoteCardBody } from "./styled";

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
