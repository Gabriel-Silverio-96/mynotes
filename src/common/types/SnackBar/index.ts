export type SnackBarTypeMessage = "error" | "success" | "warning";

export interface IPayload {
    isOpen: boolean;
    message: string;
    type_message?: SnackBarTypeMessage | any;
}

export interface ISnackBarStore {
    snackBar: IPayload;
}