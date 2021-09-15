import React, { useContext } from "react";
import { ContextGlobal } from "provider/context";

import { ButtonDelete, ButtonPrimary, ButtonRound, ButtonSecodary } from "components/UI/Button";
import { IconClose } from "components/UI/Icons";

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

    const closeModal = () => {
        setModalState(!modalState)
    }

    return (
        <ModalWrapper>
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
                    >
                        <IconClose />
                    </ButtonRound>
                </ModalHeader>

                <form onSubmit={props.onSubmit}>
                    <ModalBody>
                        <FormGroupColorContainer>
                            <FormGroupColor>
                                <input
                                    type="color"
                                    name="colorNote"
                                    id="colorNote"
                                    defaultValue={modalViewEditNote ? props.noteEditData.colorNote : "#9C10FF"}
                                    onChange={props.onChange}
                                />
                                <label htmlFor="colorNote">Color note</label>
                            </FormGroupColor>
                        </FormGroupColorContainer>

                        <FormGroup>
                            <label htmlFor="titleNote">Title note</label>
                            <input
                                type="text"
                                name="titleNote"
                                id="titleNote"
                                onChange={props.onChange}
                                defaultValue={modalViewEditNote ? props.noteEditData.titleNote : ""}
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
                                ? <ButtonDelete onClick={props.deleteNote} />
                                : (
                                    <ButtonSecodary
                                        title="Close"
                                        onClick={closeModal}
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