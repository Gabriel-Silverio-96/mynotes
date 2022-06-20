import { IErrorInputMessage } from "common/types/errorResponse";
import React, { ChangeEvent } from "react";
import { Color } from "react-color-palette";

export interface IDialogCreateNote {
    isOpenDialogCreateNote: boolean;
    onClose: () => void;
    handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isLoading?: boolean;
    errorInputMessage?: IErrorInputMessage[];
    postSaveNote?: () => void;
	color: Color;
	setColor: React.Dispatch<React.SetStateAction<Color>>;
}