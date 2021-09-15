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

const ModalMain: React.FC<ModalMainProps> = React.memo(({ onSubmit, onChange, noteEditData, deleteNote }) => {
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

                <form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroupColorContainer>
                            <FormGroupColor>
                                <input 
                                    type="color" 
                                    name="colorNote" 
                                    id="colorNote"
                                    defaultValue={modalViewEditNote ? noteEditData.colorNote : "#9C10FF"}
                                    onChange={onChange} 
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
                                onChange={onChange}                                 
                                defaultValue={modalViewEditNote ? noteEditData.titleNote : ""}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="observation">Observation</label>
                            <textarea 
                                name="observation" 
                                id="observation" 
                                rows={10} 
                                onChange={onChange} 
                                defaultValue={modalViewEditNote ? noteEditData.observation : ""}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        {
                            modalViewEditNote
                                ? <ButtonDelete onClick={deleteNote}/>
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