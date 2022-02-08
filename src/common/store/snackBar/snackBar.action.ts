import { ISnackBarAction } from "./types"

export const snackBar: ISnackBarAction = (isOpen, message, type) => {
    return {
        type: "SNACKBAR_OPEN",
        payload: { isOpen, message, type }
    }
}