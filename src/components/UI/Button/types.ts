import React from "react";

export interface ButtonProps {
    title?: string;
    type?: "button" | "reset" | "submit";
    children?: React.ReactNode;
    scale?: string;
    onClick?: (e: any) => void;
    dataModal?: string;
}

export interface ButtonRoundProps extends ButtonProps {
    deleteButton?: boolean;
    id?: string;
    dataModal?: string;
}

export interface ButtonRoundContainerProps {
    scale?: string;
    deleteButton?: boolean
}