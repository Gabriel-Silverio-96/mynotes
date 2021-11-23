import React, { createContext, useState } from "react";
import { ContextGlobalProps, ModalDeleteProps, SnackBarProps } from "./types";

export const ContextGlobal = createContext({} as ContextGlobalProps);

export const ContextProvider = (props: any) => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalDelete, setModalDelete] = useState<ModalDeleteProps>({
        modalType: "delete",
        isActive: false,
    });
    const [modalViewEditNote, setModalViewEditNote] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<SnackBarProps>({
        isActive: false,
        typeMessage: "success",
        message: ""
    })

    const closeSnackBar = () => {
        if (snackBar.isActive) {
            setTimeout(() => {
                setSnackBar((prevState: SnackBarProps) => {
                    return {
                        ...prevState,
                        isActive: false
                    }

                })
            }, 2500)
        }
    }
    if (snackBar.isActive) {
        closeSnackBar();
    }
    return (
        <ContextGlobal.Provider value={
            {
                modalState,
                setModalState,

                modalDelete,
                setModalDelete,

                modalViewEditNote,
                setModalViewEditNote,

                snackBar,
                setSnackBar
            }
        }>
            {props.children}
        </ContextGlobal.Provider>
    )
}