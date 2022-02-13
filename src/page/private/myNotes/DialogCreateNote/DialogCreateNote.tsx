import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import { INote } from "common/types/_MyNotes/notes";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogCreateNoteView from "./DialogCreateNoteView";
import { IDialogCreateNote } from "./types";

const CREATE_NOTE_INITIAL_STATE: INote = { color_note: "#9C10FF", title_note: "", observation: "" };

const DialogCreateNote: React.FC<IDialogCreateNote> = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [createNote, setCreateNote] = useState<INote>(CREATE_NOTE_INITIAL_STATE);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { setOpenDialogCreateNote, setRefreshRequest } = useContext(ContextMyNotes);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreateNote({
            ...createNote,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoading(true);
        try {
            const { data } = await apiMyNotes.post("notes/create", createNote) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setIsLoading(false);
            setOpenDialogCreateNote((prevState: boolean) => !prevState);
            setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) setErrorInputMessage(data.errors);
            if (status === 403 || status === 500) dispatch(snackBar(true, data.message, data.type_message));

            return setIsLoading(false);
        }
    }

    return <DialogCreateNoteView {... { open, onClose, handleChange, errorInputMessage, onSubmit, isLoading }} />
}

export default DialogCreateNote;