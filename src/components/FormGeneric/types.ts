import React from "react";

export interface WrapperGenericProps {
    title: string;
    children: React.ReactNode;
    widthModal: string;
    isHeaderActive: boolean;    
}

export interface FormWrapper {
    widthModal: string;
}