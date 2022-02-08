import { SnackBarTypeMessage } from "common/types/SnackBar";

type Align = "topCenter" | "topRight" | "topLeft" | "bottomCenter" | "bottomRight" | "bottomLeft";

export interface ISnackBarStyled {
    typeMessage: SnackBarTypeMessage;    
    align?: Align;
}

export interface ISnackBar  {
    typeMessage: SnackBarTypeMessage;
    message: string;
    align?: Align;
    progressBar?: boolean;
    delay?: number;
}

export interface ITypeMessageStyled {
    success: string;
    error: string;
    warning: string;
    [key: string]: string;
}

export type Postion = {
    top: string;
    bottom: string;
    right: string;
    left: string;
}

export interface IAlignOption {
    topCenter: Postion;
    topRight: Postion;
    topLeft: Postion;
    bottomCenter: Postion;
    bottomRight: Postion;
    bottomLeft: Postion;
    [key: string]: Postion;
}

export interface ISnackBarProgressBarStyled {
    delay?: number;
}