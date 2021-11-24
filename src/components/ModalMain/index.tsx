import React, { MouseEvent, useContext } from "react";
import { ContextGlobal } from "provider/context";

import { ButtonDelete, ButtonPrimary, ButtonRound, ButtonSecodary } from "components/UI/Button";

import {
    ModalWrapper,
    ModalContainer,
    ModalHeader,
    ModalBody,
    FormGroupColor,
    FormGroupColorContainer,
    FormGroup,
    ModalFooter
} from "./styled";

import { ModalMainProps } from "./types";
import { ContextGlobalProps } from "provider/types";

const ModalMain: React.FC<ModalMainProps<HTMLInputElement | HTMLTextAreaElement>> = React.memo((props) => {
    const { modalState, setModalState, modalViewEditNote } = useContext<ContextGlobalProps>(ContextGlobal);

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
                    <h2>
                        {
                            modalViewEditNote
                                ? "Edit note"
                                : "View note"
                        }
                    </h2>
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
                                rows={10}
                                onChange={props.onChange}
                                defaultValue={modalViewEditNote ? props.noteEditData.observation : ""}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        {
                            modalViewEditNote
                                ? <ButtonDelete onClick={props.deleteNote} type="button"/>
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