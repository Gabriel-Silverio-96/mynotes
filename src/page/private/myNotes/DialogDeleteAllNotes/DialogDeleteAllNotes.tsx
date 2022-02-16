import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";

const DialogDeleteAllNotes: React.FC = () => {
    const dispatch = useDispatch();
    const { closeDialogDeleteAllNotes } = useDialogMynotes();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setRefreshRequest, setOpenDialogDeleteAllNotes, isOpenDialogDeleteAllNotes } = useContext(ContextMyNotes);
        
    const onClose = () => closeDialogDeleteAllNotes();

    const deleteAllNotes = async () => {
        setIsLoading(true);
        try {
            const { data } = await apiMyNotes.delete("notes/delete-all") as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
                        setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { data } = error.response as AxiosResponse<IDataErrorResponse>;            
            return dispatch(snackBar(true, data.message, data.type_message));
        } finally {
            setIsLoading(false);
            setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
        }
    }
    return <DialogDeleteAllNotesView {...{ onClose, isLoading, deleteAllNotes }} open={isOpenDialogDeleteAllNotes} />
}

export default DialogDeleteAllNotes;