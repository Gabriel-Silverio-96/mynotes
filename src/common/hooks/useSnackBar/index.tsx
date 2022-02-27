import { snackBar } from "common/store/snackBar/snackBar.action";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useSnackBar() {
    const dispatch = useDispatch();

    const snackBarSuccess = useCallback((isOpen: boolean, message: string) => {
        dispatch(snackBar(isOpen, message, "success"));
    }, [dispatch]);

    const snackBarError = useCallback((isOpen: boolean, message: string) => {
        dispatch(snackBar(isOpen, message, "error"));
    }, [dispatch]);

    const snackBarWarning = useCallback((isOpen: boolean, message: string) => {
        dispatch(snackBar(isOpen, message, "warning"));
    }, [dispatch]);

    return { snackBarSuccess, snackBarError, snackBarWarning }
}