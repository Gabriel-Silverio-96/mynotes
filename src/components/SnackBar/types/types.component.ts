import { AlignSnackBar, SnackBarTypeMessage } from "common/types/SnackBar";

export interface ISnackBar  {
    typeMessage: SnackBarTypeMessage;
    message: string;
    align?: AlignSnackBar;
    progressBar?: boolean;
    delay?: number;
    closeSnackBar?: () => void;
    buttonClose?: boolean;
}