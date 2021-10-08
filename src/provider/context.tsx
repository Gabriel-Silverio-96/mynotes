import React, { createContext, useState } from "react";
import { ContextGlobalProps, ModalDeleteProps } from "./types";

export const ContextGlobal = createContext({} as ContextGlobalProps);

export const ContextProvider = (props: any) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalDelete, setModalDelete] = useState<ModalDeleteProps>({
        modalType: "delete",
        isActive: false,
    });
    const [modalViewEditNote, setModalViewEditNote] = useState<boolean>(false);

    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                setModalState,

                modalDelete,
                setModalDelete,

                modalViewEditNote,
                setModalViewEditNote
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}