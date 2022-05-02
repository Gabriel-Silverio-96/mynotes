import { ISnackBarAction } from "./types";

export const snackBar: ISnackBarAction = (isOpen, message, type_message) => {
	return {
		type: "SNACKBAR_OPEN",
		payload: { isOpen, message, type_message }
	};
};
