import React from "react";

import { ButtonRound } from "components/UI/Button";

import { NoteCardContainer, NoteCardHeader, NoteCardButton, NoteCardBody } from "./styled";

import { NoteCardProps } from "./types";
import { IconEye, IconTrash } from "../Icons";

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
                    <ButtonRound scale="0.7">
                        <IconEye />
                    </ButtonRound>

                    <ButtonRound scale="0.7" deleteButton={true}>
                        <IconTrash />
                    </ButtonRound>
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
