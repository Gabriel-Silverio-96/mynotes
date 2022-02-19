import { DefaultTheme } from "styled-components";

export interface IHeader {
    authenticated: boolean; 
    toggleTheme: () => void; 
    theme: DefaultTheme;
}