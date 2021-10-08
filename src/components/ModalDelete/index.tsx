import React, { MouseEvent, useContext } from "react";

import { ButtonPrimary, ButtonRound, ButtonSecodary } from "components/UI/Button";

import {
    ModalWrapper,
    ModalContainer,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "./styled";

import { ModalDeleteProps } from "./types";
import { ContextGlobal } from "provider/context";
import { ContextGlobalProps } from "provider/types";

const ModalDelete: React.FC<ModalDeleteProps> = React.memo(({ actionMain, title, body }) => {
    const { setModalDelete } = useContext<ContextGlobalProps>(ContextGlobal);

    const closeModal = (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        const dataModal = target.dataset.modal;

        if (dataModal === "close") {
            setModalDelete({
                modalType: "delete",
                isActive: false
            })
        }
    }

    return (
        <ModalWrapper data-modal="close" onClick={closeModal}> 
            <ModalContainer>
                <ModalHeader>
                    <h2>
                        {title}
                    </h2>
                    <ButtonRound
                        scale="0.8"
                        data-modal="close"
                    >
                        X
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
                        data-modal="close"
                    />
                    <ButtonPrimary
                        title="Yes"
                        onClick={actionMain}
                    />

                </ModalFooter>
            </ModalContainer>
        </ModalWrapper>
    )
}
)

export default ModalDelete;