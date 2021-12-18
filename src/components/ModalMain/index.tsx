import React, { MouseEvent, useContext } from "react";

import { ContextGlobal } from "provider/context";
import { ContextGlobalProps } from "provider/types";

import { IoIosClose } from "react-icons/io";
import Button from "components/Button";
import Badge from "components/Badge";

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

import { ModalMainProps } from "./types";

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
                    <Button 
                        variant="text" 
                        data-modal="close" 
                        style={{paddingRight: 0}}
                        iconButton={<IoIosClose data-modal="close" size={25} />} 
                    />
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
                                ? (
                                    <Button
                                        variant="delete"
                                        title="Delete"
                                        type="button"
                                        onClick={props.deleteNote}
                                    />
                                )
                                : (
                                    <Button
                                        variant="secondary"
                                        title="Close"
                                        onClick={closeModal}
                                        data-modal="close"
                                    />
                                )
                        }
                        <Button
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