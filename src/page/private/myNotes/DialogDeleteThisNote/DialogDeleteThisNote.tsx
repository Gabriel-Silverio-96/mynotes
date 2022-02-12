import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import { ContextMyNotes, DIALOG_DELETE_NOTE_INITIAL_STATE } from "../Context/MyNotes";
import DialogDeleteNoteView from "./DialogDeleteThisNoteView";
import { IDialogDeleteThisNote } from "./types";

const DialogDeleteThisNote: React.FC<IDialogDeleteThisNote> = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const { noteIdSelected, setOpenDialogDeleteNote, setRefreshRequest } = useContext(ContextMyNotes);

    const deleteThisNote = async () => {
        try {
            const { data } = await apiMyNotes.delete(`notes/delete-this/note_id=${noteIdSelected}`) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setOpenDialogDeleteNote({ ...DIALOG_DELETE_NOTE_INITIAL_STATE, open: false });
            setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { data } = error.response as AxiosResponse<IDataErrorResponse>;
            return dispatch(snackBar(true, data.message, data.type_message));
        }
    }
    return <DialogDeleteNoteView {... { open, onClose, deleteThisNote }} />
}

export default DialogDeleteThisNote;