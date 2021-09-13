import React, { createContext, useState } from "react";
import { ContextGlobalProps } from "./types";

export const ContextGlobal = createContext({} as ContextGlobalProps);

export const ContextProvider = (props: any) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalDeleteThisNote, setModalDeleteThisNote] = useState<boolean>(false);

    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                setModalState,

                modalDeleteThisNote,
                setModalDeleteThisNote
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}