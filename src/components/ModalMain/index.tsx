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
    
    const closeModal = (e: any) => {
        const dataModal = e.target.dataset.modal

        if(dataModal === "close") {            
            setModalState(!modalState)
        }
        
    }

    return (
        <ModalWrapper onClick={closeModal} data-modal="close">
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
                                    defaultValue={modalViewEditNote ? props.noteEditData.color_note : "#9C10FF"}
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
                                ? <ButtonDelete onClick={props.deleteNote} />
                                : (
                                    <ButtonSecodary
                                        title="Close"
                                        onClick={closeModal}
                                        dataModal="close"
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