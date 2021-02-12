import React, { createContext, useState} from 'react';

export const ContextGlobal = createContext({});

export const ContextProvider = props => {
    const [modalState, SetModalState] = useState("modal-none");
    const [blur, SetBlur] = useState("");

    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                SetModalState,
                blur,
                SetBlur
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}