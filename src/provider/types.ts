import React from "react";
import { DefaultTheme } from "styled-components";

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

export interface ContextThemeProps {
    themeContext: DefaultTheme;
    setThemeContext: React.Dispatch<React.SetStateAction<DefaultTheme>>;   
}
