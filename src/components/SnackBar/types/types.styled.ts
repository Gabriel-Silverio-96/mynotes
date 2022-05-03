import { AlignSnackBar, SnackBarTypeMessage } from "common/types/snackBar";

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

export interface ISnackBarStyled {
    typeMessage: SnackBarTypeMessage;
    align?: AlignSnackBar;
}