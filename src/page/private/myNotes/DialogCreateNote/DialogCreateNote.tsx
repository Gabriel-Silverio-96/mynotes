import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import { INote } from "common/types/_MyNotes/notes";
import React, { ChangeEvent, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogCreateNoteView from "./DialogCreateNoteView";

const CREATE_NOTE_INITIAL_STATE: INote = { color_note: "#9C10FF", title_note: "", observation: "" };

const DialogCreateNote: React.FC = () => {
    const dispatch = useDispatch();

    const { closeDialogCreateNote } = useDialogMynotes();
    const { setRefreshRequest, isOpenDialogCreateNote } = useContext(ContextMyNotes);

    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [createNote, setCreateNote] = useState<INote>(CREATE_NOTE_INITIAL_STATE);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreateNote({
            ...createNote,
            [e.target.name]: e.target.value
        })
    }

    const onClose = () => {
        setCreateNote(CREATE_NOTE_INITIAL_STATE);
        closeDialogCreateNote();
    }

    const postSaveNote = async () => {
        setErrorInputMessage([]);
        setIsLoading(true);
        try {
            const { data } = await apiMyNotes.post("notes/create", createNote) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setIsLoading(false);
            closeDialogCreateNote();
            setRefreshRequest((prevState: boolean) => !prevState);
            setCreateNote(CREATE_NOTE_INITIAL_STATE);
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) setErrorInputMessage(data.errors);
            if (status > 403) dispatch(snackBar(true, data.message, data.type_message));            
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <DialogCreateNoteView
            {... { onClose, handleChange, isOpenDialogCreateNote, errorInputMessage, postSaveNote, isLoading }}
        />
    )
}

export default DialogCreateNote;