export interface IDialog {    
    size?: "lg" | "md" | "xs" | "fullScreen";
    minHeight?: number;
}

export interface IDialogOptionSize {    
    fullScreen: string;
    lg: string;
    md: string;
    xs: string;
    default: string;
    [key: string]: string;
}