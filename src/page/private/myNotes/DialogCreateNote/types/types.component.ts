import { IErrorInputMessage } from "common/types/errorResponse";
import { ChangeEvent } from "react";

export interface IDialogCreateNote {
    isOpenDialogCreateNote: boolean;
    onClose: () => void;
    handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoading?: boolean;
    errorInputMessage?: IErrorInputMessage[];
    postSaveNote?: () => void;
}