export interface IDialog {    
    size?: "lg" | "md" | "xs" | "fullScreen";
    minHeight?: number;
    open: boolean;
}

export interface IDialogStyled extends Omit<IDialog, "open">{    
}

export interface IDialogOptionSize {    
    fullScreen: string;
    lg: string;
    md: string;
    xs: string;
    default: string;
    [key: string]: string;
}