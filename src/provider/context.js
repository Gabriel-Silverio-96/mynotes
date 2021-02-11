import React, { createContext, useState} from 'react';

export const ContextGlobal = createContext({});

export const ContextProvider = props => {
    const [modalState, SetModalState] = useState("modal-none");

    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                SetModalState
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}