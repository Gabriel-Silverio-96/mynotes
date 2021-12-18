import React, { ButtonHTMLAttributes } from "react";

type VariantButtonProps = "primary" | "secondary" | "delete" | "success" | "text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string | any;
    iconButton?: React.ReactNode;
    type?: "button" | "reset" | "submit";
    children?: React.ReactNode;
    isLoading?: boolean | any;
    scale?: string;
    size?: "large" | "medium" | "small";
    variant?: VariantButtonProps;
    onClick?: (e: any) => void;    
}

export interface ButtonContainerProps extends ButtonProps { }

export interface ButtonRoundProps extends ButtonProps {
    deleteButton?: boolean;
    id?: string;
}

export interface ButtonRoundContainerProps {
    scale?: string;
    deleteButton?: boolean
}

type ButtonVariantItensProps = {
    backgroundColor: string | ((props: any) => string);
    backgroundColorHover: string | ((props: any) => string);
    color: string | ((props: any) => string);
    colorHover: string | ((props: any) => string);
    border: string | ((props: any) => string);
    borderHover: string | ((props: any) => string);
}

export interface ButtonVariantProps {
    primary: ButtonVariantItensProps;
    secondary: ButtonVariantItensProps;
    text?: ButtonVariantItensProps;
    delete?: ButtonVariantItensProps;
    success?: ButtonVariantItensProps;
}

type ButtonSizeItensProps = {
    fontSize: string;
    padding: string;
}

export interface ButtonSizeProps {
    large: ButtonSizeItensProps;
    medium: ButtonSizeItensProps;
    small: ButtonSizeItensProps;
}