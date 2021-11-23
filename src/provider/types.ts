import React from "react";

export interface SnackBarProps {
    isActive: boolean;
    typeMessage: "success" | "error" | "warning";
    message: string;
}

export interface ContextGlobalProps {
    modalState: boolean;
    setModalState: (b: boolean) => void;

    modalDelete: ModalDeleteProps;
    setModalDelete: (ModalDeleteProps: ModalDeleteProps) => void;

    modalViewEditNote: boolean;
    setModalViewEditNote: (b: boolean) => void;

    snackBar: SnackBarProps;
    setSnackBar: React.Dispatch<React.SetStateAction<SnackBarProps>>
}

export interface LoginFieldsProps {
    email: string;
    password: string;
}

export interface UserDataProps {
    full_name: string;
}

export interface AuthContextProps {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    userData: UserDataProps;
    setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>;
}

export interface ModalDeleteProps {
    modalType: "delete" | "deleteAll"
    isActive: boolean;
}
