type TypeMessage = "error" | "success" | "warning";
export interface SnackBarContainerProps {
    typeMessage: TypeMessage;    
}

export interface SnackBarProps  {
    typeMessage: TypeMessage;
    message: string;
}

export interface TypeMessageProps {
    success: string;
    error: string;
    warning: string;
    [key: string]: string
}

export interface InterceptorTypeMessageProps {
    message: string;
}