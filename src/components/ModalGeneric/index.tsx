import React from "react";

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

const ModalGeneric: React.FC<ModalGenericProps> = React.memo(({ onClick, title, body, closeModal }) => {  
    return (
        <ModalWrapper>
            <ModalContainer>
                <ModalHeader>
                    <h2>
                        {title}
                    </h2>
                    <ButtonRound
                        scale="0.8"
                        onClick={closeModal}
                    >
                        <IconClose />
                    </ButtonRound>
                </ModalHeader>

                <ModalBody>
                    <p>
                        {body}
                    </p>
                </ModalBody>

                <ModalFooter>
                    <ButtonSecodary
                        title="No"
                        onClick={closeModal}
                    />
                    <ButtonPrimary
                        title="Yes"
                        onClick={onClick}
                    />

                </ModalFooter>
            </ModalContainer>
        </ModalWrapper>
    )
}
)

export default ModalGeneric;