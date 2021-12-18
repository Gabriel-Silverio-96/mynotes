import React, { MouseEvent, useContext } from "react";

import { ContextGlobal } from "provider/context";
import { ContextGlobalProps } from "provider/types";

import Button from "components/Button";
import { IoIosClose } from "react-icons/io";

import {
    ModalWrapper,
    ModalContainer,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "./styled";
import { ModalDeleteProps } from "./types";

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
                        style={{paddingRight: 0}}
                        iconButton={<IoIosClose data-modal="close" size={25}/>} 
                    />
                </ModalHeader>

                <ModalBody>
                    <p>
                        {body}
                    </p>
                </ModalBody>

                <ModalFooter>
                    <Button
                        title="No"
                        data-modal="close"
                        variant="secondary"
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