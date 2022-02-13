import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";

const DialogDeleteAllNotes: React.FC = () => {
    const { closeDialogDeleteAllNotes } = useDialogMynotes();
    const { setRefreshRequest, setOpenDialogDeleteAllNotes, isOpenDialogDeleteAllNotes } = useContext(ContextMyNotes);
    const dispatch = useDispatch();
        
    const onClose = () => closeDialogDeleteAllNotes();

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
    return <DialogDeleteAllNotesView {...{ onClose, deleteAllNotes }} open={isOpenDialogDeleteAllNotes} />
}

export default DialogDeleteAllNotes;