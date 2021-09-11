import React, { createContext, useState } from "react";
import { ContextGlobalProps } from "./types";

export const ContextGlobal = createContext({} as ContextGlobalProps);

export const ContextProvider = (props: any) => {
    const [modalState, setModalState] = useState<boolean>(false);

    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                setModalState,
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}