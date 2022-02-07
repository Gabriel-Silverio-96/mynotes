import { IPayload, SnackBarType } from "common/types/SnackBar";

export interface ISnackBarResult {
    type: "SNACKBAR_OPEN";
    payload: IPayload;
}

export interface ISnackBarAction {
    (isOpen: boolean, message: string, type?: SnackBarType): ISnackBarResult
}