import React, { useContext, useState } from "react";
import { ContextGlobal } from "provider/context";

import { ButtonPrimary, ButtonRound, ButtonSecodary } from "components/UI/Button";
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

const ModalMain: React.FC<ModalMainProps> = React.memo(
    ({ onSubmit, onChange }) => {
        const { modalState, setModalState } = useContext(ContextGlobal);

        const closeModal = () => {
            setModalState(!modalState)
        }

        return (
            <ModalWrapper>
                <ModalContainer>

                    <ModalHeader>
                        <h2>View note</h2>
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
                                    <input type="color" name="colorNote" id="colorNote" defaultValue="#9C10FF" onChange={onChange} />
                                    <label htmlFor="colorNote">Color note</label>
                                </FormGroupColor>
                            </FormGroupColorContainer>

                            <FormGroup>
                                <label htmlFor="titleNote">Title note</label>
                                <input type="text" name="titleNote" id="titleNote" onChange={onChange} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="observation">Observation</label>
                                <textarea name="observation" id="observation" rows={10} onChange={onChange} />
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <ButtonSecodary
                                title="Close"
                                onClick={closeModal}
                            />
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