import React, { ChangeEvent, FormEvent } from "react";

export interface ContextGlobalProps {
    modalState: boolean;
    setModalState: (b: boolean) => void;

    modalDeleteThisNote: boolean;
    setModalDeleteThisNote: (b: boolean) => void;

    modalDeleteAllNote: boolean;
    setModalDeleteAllNote: (b: boolean) => void;

    modalViewEditNote: boolean;
    setModalViewEditNote: (b: boolean) => void;
}

export interface LoginFieldsProps {
    email: string;
    password: string;
}

export interface AuthContextProps {
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;    
}