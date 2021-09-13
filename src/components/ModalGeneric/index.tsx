import React, { useContext } from "react";
import { ContextGlobal } from "provider/context";

import { ButtonPrimary, ButtonRound, ButtonSecodary } from "components/UI/Button";
import { IconClose } from "components/UI/Icons";

import {
    ModalWrapper,
    ModalContainer,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "./styled";

import { ModalGenericProps } from "./types";

const ModalGeneric: React.FC<ModalGenericProps> = React.memo(({ deleteThisNote }) => {
    const { modalDeleteThisNote, setModalDeleteThisNote } = useContext(ContextGlobal);

    const closeModal = () => {
        setModalDeleteThisNote(!modalDeleteThisNote)
    }

    return (
        <ModalWrapper>
            <ModalContainer>
                <ModalHeader>
                    <h2>Delete note</h2>
                    <ButtonRound
                        scale="0.8"
                        onClick={closeModal}
                    >
                        <IconClose />
                    </ButtonRound>
                </ModalHeader>

                <ModalBody>
                    <p>Do you want to delete this note?</p>
                </ModalBody>

                <ModalFooter>
                    <ButtonSecodary
                        title="Close"
                        onClick={closeModal}
                    />
                    <ButtonPrimary
                        title="Delete"
                        onClick={deleteThisNote}
                    />

                </ModalFooter>
            </ModalContainer>
        </ModalWrapper>
    )
}
)

export default ModalGeneric;