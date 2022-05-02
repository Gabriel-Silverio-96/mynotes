import { IDialog } from "./types.component";

export type IDialogStyled = Omit<IDialog, "open">

export interface IDialogOptionSize {    
    fullScreen: string;
    lg: string;
    md: string;
    xs: string;
    default: string;
    [key: string]: string;
}