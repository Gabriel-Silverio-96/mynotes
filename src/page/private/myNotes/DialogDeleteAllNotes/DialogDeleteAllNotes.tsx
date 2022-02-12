import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";
import { IDeleteAllNote } from "./types";

const DialogDeleteAllNotes: React.FC<IDeleteAllNote> = (props) => {
    const { setRefreshRequest, setOpenDialogDeleteAllNotes } = useContext(ContextMyNotes);
    const dispatch = useDispatch()
    const { open, onClose } = props;

    const deleteAllNotes = async () => {
        try {
            const { data } = await apiMyNotes.delete("notes/delete-all") as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
            setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { data } = error.response as AxiosResponse<IDataErrorResponse>;
            setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
            return dispatch(snackBar(true, data.message, data.type_message));
        }
    }
    return <DialogDeleteAllNotesView {...{ open, onClose, deleteAllNotes }} />
}

export default DialogDeleteAllNotes;