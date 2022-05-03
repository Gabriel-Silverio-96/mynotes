import { SnackBarTypeMessage } from "../snackBar";

export interface IDataMessageResponse {
    type_message: SnackBarTypeMessage;
    message: string;
}

export interface IErrorInputMessage {
    value: string;
    msg: string;
    param: string;
    location: string;
}

export interface IDataErrorResponse extends IDataMessageResponse{
    errors: IErrorInputMessage[] | any;
}