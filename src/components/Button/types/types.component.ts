import { IVariant } from "common/types/VariantColor";
import React, { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IVariant {
    title?: string | any;
    iconButton?: React.ReactNode;
    children?: React.ReactNode;
    isLoading?: boolean | any;
    justIconLoading?: boolean;
    scale?: string;
    size?: "large" | "medium" | "small";    
    onClick?: (e: any) => void;    
    messageLoading?: string;
}