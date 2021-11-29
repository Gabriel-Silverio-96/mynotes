import React from "react";

export interface ButtonProps {
    title?: string;
    type?: "button" | "reset" | "submit";
    children?: React.ReactNode;
    scale?: string;
    size?: "large" | "medium" | "small";
    onClick?: (e: any) => void;
    dataModal?: string;
}

export interface ButtonPrimaryContainerProps {
    size?: "large" | "medium" | "small";
}

export interface ButtonRoundProps extends ButtonProps {
    deleteButton?: boolean;
    id?: string;
}

export interface ButtonRoundContainerProps {
    scale?: string;
    deleteButton?: boolean
}