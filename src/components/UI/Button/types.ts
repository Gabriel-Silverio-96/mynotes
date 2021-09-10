import React from "react";

export interface ButtonProps {
    title?: string;
    type?: "button" | "reset" | "submit";
    children?: React.ReactNode;
    onClick?: () => void;
}