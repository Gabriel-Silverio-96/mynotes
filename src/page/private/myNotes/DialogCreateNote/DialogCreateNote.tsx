import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { FormEvent, useContext } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogCreateNoteView from "./DialogCreateNoteView";
import { IDialogCreateNote } from "./types";

const DialogCreateNote: React.FC<IDialogCreateNote> = (props) => {
    const dispatch = useDispatch();

    const { createNote,
        setErrorInputMessage,
        errorInputMessage,
        isLoadingRequest,
        setIsLoadingRequest,
        setOpenDialogCreateNote,
        setRefreshRequest
    } = useContext(ContextMyNotes);
    const { open, onClose, handleChange } = props;

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoadingRequest(true);
        try {
            const { data } = await apiMyNotes.post("notes/create", createNote) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setIsLoadingRequest(false);
            setOpenDialogCreateNote((prevState: boolean) => !prevState);
            setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) setErrorInputMessage(data.errors);
            if (status === 403 || status === 500) dispatch(snackBar(true, data.message, data.type_message));

            return setIsLoadingRequest(false);
        }
    }

    return <DialogCreateNoteView {... { open, onClose, handleChange, errorInputMessage, onSubmit }} isLoading={isLoadingRequest} />
}

export default DialogCreateNote;