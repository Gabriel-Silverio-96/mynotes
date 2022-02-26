import React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface IFormContainer {
    history: RouteComponentProps["history"];
    title: string;
    themeTitle: string;
    children: React.ReactNode;
    widthModal?: string;
    isLogoVisible?: boolean;
    isActiveButtonBack?: boolean;
    disabledButtonBack?: boolean;    
}