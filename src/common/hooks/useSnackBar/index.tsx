import { useDispatch } from "react-redux";
import { snackBar } from "common/store/snackBar/snackBar.action";

export default function useSnackBar() {
    const dispatch = useDispatch();

    const snackBarSuccess = (isOpen: boolean, message: string) => {
        dispatch(snackBar(isOpen, message, "success"));
    }

    const snackBarError = (isOpen: boolean, message: string) => {
        dispatch(snackBar(isOpen, message, "error"));
    }

    const snackBarWarning = (isOpen: boolean, message: string) => {
        dispatch(snackBar(isOpen, message, "warning"));
    }

    return { snackBarSuccess, snackBarError, snackBarWarning }
}