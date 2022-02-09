import { SnackBarTypeMessage } from "../SnackBar";

export interface IErrorInputMessage {
    value: string;
    msg: string;
    param: string;
    location: string;
}

export interface IDataErrorResponse {
    errors: any;
    type_message: SnackBarTypeMessage;
    message: string;
}