import React from "react";

export interface ContextGlobalProps {
    modalState: boolean;
    setModalState: (b: boolean) => void;

    modalDelete: ModalDeleteProps;
    setModalDelete: (ModalDeleteProps: ModalDeleteProps) => void;

    modalViewEditNote: boolean;
    setModalViewEditNote: (b: boolean) => void;
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
