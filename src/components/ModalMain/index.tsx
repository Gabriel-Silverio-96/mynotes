import React, { MouseEvent, useContext } from "react";
import { ContextGlobal } from "provider/context";
import {
    ModalWrapper,
    ModalContainer,
    ModalHeader,
    ModalHeaderTitle,
    ModalBody,
    FormGroupColor,
    FormGroupColorContainer,
    FormGroup,
    ModalFooter
} from "./styled";

import { ButtonDelete, ButtonPrimary, ButtonRound, ButtonSecodary } from "components/UI/Button";
import Badge from "components/Badge";

import { ModalMainProps } from "./types";
import { ContextGlobalProps } from "provider/types";

const ModalMain: React.FC<ModalMainProps<HTMLInputElement | HTMLTextAreaElement>> = React.memo((props) => {
    const { modalState, setModalState, modalViewEditNote } = useContext<ContextGlobalProps>(ContextGlobal);
    const dateCreatedAt = new Date(props.noteEditData.created_at!).toLocaleDateString("en-US");

    const closeModal = (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        const dataModal = target.dataset.modal;

        if (dataModal === "close") {
            setModalState(!modalState)
        }
    }

    return (
        <ModalWrapper data-modal="close" onClick={closeModal}>
            <ModalContainer>
                <ModalHeader>
                    <ModalHeaderTitle>
                        <h2>
                            {
                                modalViewEditNote
                                    ? "Edit note"
                                    : "New note"
                            }
                        </h2>

                        {modalViewEditNote && (
                            <Badge text={`Created at ${dateCreatedAt}`} />
                        )}
                    </ModalHeaderTitle>
                    <ButtonRound
                        scale="0.8"
                        onClick={closeModal}
                        data-modal="close"
                    >
                        X
                    </ButtonRound>
                </ModalHeader>

                <form onSubmit={props.onSubmit}>
                    <ModalBody>
                        <FormGroupColorContainer>
                            <FormGroupColor>
                                <input
                                    type="color"
                                    name="color_note"
                                    id="color_note"
                                    defaultValue={modalViewEditNote ? props.noteEditData.color_note : "#9C10FF"}
                                    onChange={props.onChange}
                                />
                                <label htmlFor="color_note">Color note</label>
                            </FormGroupColor>
                        </FormGroupColorContainer>

                        <FormGroup>
                            <label htmlFor="title_note">Title note</label>
                            <input
                                type="text"
                                name="title_note"
                                id="title_note"
                                onChange={props.onChange}
                                defaultValue={modalViewEditNote ? props.noteEditData.title_note : ""}
                            />
                            <span>{props.titleNoteErro}</span>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="observation">Observation</label>
                            <textarea
                                name="observation"
                                id="observation"
                                rows={5}
                                onChange={props.onChange}
                                defaultValue={modalViewEditNote ? props.noteEditData.observation : ""}
                                maxLength={500}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        {
                            modalViewEditNote
                                ? <ButtonDelete onClick={props.deleteNote} type="button" />
                                : (
                                    <ButtonSecodary
                                        title="Close"
                                        onClick={closeModal}
                                        data-modal="close"
                                    />
                                )
                        }
                        <ButtonPrimary
                            title="Save"
                            type="submit"
                        />
                    </ModalFooter>
                </form>
            </ModalContainer>
        </ModalWrapper>
    )
}
)

export default ModalMain;