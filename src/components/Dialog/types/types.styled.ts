import { IDialog } from "./types.component";

export interface IDialogStyled extends Omit<IDialog, "open">{ }

export interface IDialogOptionSize {    
    fullScreen: string;
    lg: string;
    md: string;
    xs: string;
    default: string;
    [key: string]: string;
}