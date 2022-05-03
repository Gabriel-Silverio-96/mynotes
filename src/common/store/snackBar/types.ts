import { IPayload, SnackBarTypeMessage } from "common/types/snackBar";

export interface ISnackBarResult {
    type: "SNACKBAR_OPEN";
    payload: IPayload;
}

export interface ISnackBarAction {
    (isOpen: boolean, message: string, type_message?: SnackBarTypeMessage): ISnackBarResult
}