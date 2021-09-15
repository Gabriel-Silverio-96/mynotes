import React, { createContext, useState } from "react";
import { ContextGlobalProps } from "./types";

export const ContextGlobal = createContext({} as ContextGlobalProps);

export const ContextProvider = (props: any) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalDeleteThisNote, setModalDeleteThisNote] = useState<boolean>(false);
    const [modalDeleteAllNote, setModalDeleteAllNote] = useState<boolean>(false);
    const [modalViewEditNote, setModalViewEditNote] = useState<boolean>(false);

    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                setModalState,

                modalDeleteThisNote,
                setModalDeleteThisNote,

                modalDeleteAllNote,
                setModalDeleteAllNote,

                modalViewEditNote,
                setModalViewEditNote
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}