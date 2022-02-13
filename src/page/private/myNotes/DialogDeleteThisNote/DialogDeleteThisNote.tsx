import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteNoteView from "./DialogDeleteThisNoteView";

const DialogDeleteThisNote: React.FC = () => {
    const dispatch = useDispatch();
    const { closeDialogDeleteThisNote } = useDialogMynotes();
    const { noteIdSelected, setOpenDialogDeleteThisNote, setRefreshRequest, isOpenDialogDeleteThisNote } = useContext(ContextMyNotes);

    const onClose = () => closeDialogDeleteThisNote();

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
    return <DialogDeleteNoteView {... { onClose, deleteThisNote }} open={isOpenDialogDeleteThisNote} />
}

export default DialogDeleteThisNote;