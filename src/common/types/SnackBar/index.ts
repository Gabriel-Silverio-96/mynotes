export type SnackBarType = "error" | "success" | "warning";

export interface IPayload {
    isOpen: boolean;
    message: string;
    type_message?: SnackBarType,
}

export interface ISnackBarStore {
    snackBar: IPayload
}