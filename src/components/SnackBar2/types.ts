type TypeMessage = "error" | "success" | "warning";

export interface ISnackBarStyled {
    typeMessage: TypeMessage;    
}

export interface ISnackBar  {
    typeMessage: TypeMessage;
    message: string;
}

export interface ITypeMessage {
    success: string;
    error: string;
    warning: string;
    [key: string]: string
}