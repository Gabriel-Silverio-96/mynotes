type SnackBarType = "error" | "success" | "alert";

type Payload = {
    isOpen: boolean;
    message: string;
    type?: SnackBarType,
}

export interface ISnackBarResult {
    type: "SNACKBAR_OPEN";
    payload: Payload;
}

export interface ISnackBarAction {
    (isOpen: boolean, message: string, type?: SnackBarType): ISnackBarResult
}