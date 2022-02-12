import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteNoteView from "./DialogDeleteThisNoteView";
import { IDialogDeleteThisNote } from "./types";

const DialogDeleteThisNote: React.FC<IDialogDeleteThisNote> = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const { noteIdSelected, setOpenDialogDeleteThisNote, setRefreshRequest } = useContext(ContextMyNotes);

    const deleteThisNote = async () => {
        try {
            const { data } = await apiMyNotes.delete(`notes/delete-this/note_id=${noteIdSelected}`) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
            setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { data } = error.response as AxiosResponse<IDataErrorResponse>;
            setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
            return dispatch(snackBar(true, data.message, data.type_message));
        }
    }
    return <DialogDeleteNoteView {... { open, onClose, deleteThisNote }} />
}

export default DialogDeleteThisNote;