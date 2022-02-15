import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogEditNoteView from "./DialogEditNoteView";

const EDIT_NOTE_INITIAL_STATE: INote = { color_note: "", title_note: "", observation: "", created_at: "" }

const DialogEditNote: React.FC = () => {
    const dispatch = useDispatch();

    const [editNote, setEditNote] = useState<INote>(EDIT_NOTE_INITIAL_STATE);
    const { closeDialogEditNote } = useDialogMynotes();
    const { noteEditIdSelected, isOpenDialogEditNote } = useContext(ContextMyNotes);

    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditNote({
            ...editNote,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const getNoteList = async () => {
            if (noteEditIdSelected) {
                setIsLoading(true);
                try {
                    const { data } = await apiMyNotes.get(`notes/note_id=${noteEditIdSelected}`) as AxiosResponse<{ note: INote }>;
                    setEditNote(data.note);
                } catch (err) {
                    const error = err as AxiosError;
                    const { data } = error.response as AxiosResponse<IDataErrorResponse>;
                    return dispatch(snackBar(true, data.message, data.type_message));
                } finally {
                    setTimeout(() => setIsLoading(false), 500);
                }
            }
        };

        getNoteList();
    }, [dispatch, noteEditIdSelected]);

    const onClose = () => {
        closeDialogEditNote();
        setEditNote(EDIT_NOTE_INITIAL_STATE);
        setIsLoading(false);
    }

    return (
        <DialogEditNoteView {... { handleChange, isLoading, errorInputMessage, editNote, onClose }}
            open={isOpenDialogEditNote}
        />
    )
}

export default DialogEditNote;