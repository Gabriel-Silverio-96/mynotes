import React, { MouseEvent, useContext } from "react";

import { ContextGlobal } from "provider/context";
import { ContextGlobalProps } from "provider/types";

import Button from "components/Button";
import { IoIosClose } from "react-icons/io";

import { ModalDeleteProps } from "./types";

import {
    ModalWrapper,
    ModalContainer,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "./styled";

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
                    <Button 
                        data-modal="close"
                        variant="text" 
                        iconButton={<IoIosClose size={20} data-modal="close"/>} 
                    />
                </ModalHeader>

                <ModalBody>
                    <p>
                        {body}
                    </p>
                </ModalBody>

                <ModalFooter>
                    <Button
                        variant="text"
                        title="No"
                        data-modal="close"
                        style={{ paddingLeft: "0" }}
                    />
                    <Button
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