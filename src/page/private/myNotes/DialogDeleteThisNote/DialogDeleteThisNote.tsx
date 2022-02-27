import { AxiosResponse } from "axios";
import { ISnackBarResponse } from "common/types/SnackBar";
import React, { useContext, useState } from "react";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteNoteView from "./DialogDeleteThisNoteView";

const DialogDeleteThisNote: React.FC = () => {
    const { closeDialogDeleteThisNote } = useDialogMynotes();
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { noteIdSelected, setOpenDialogDeleteThisNote, setRefreshRequest, isOpenDialogDeleteThisNote } = useContext(ContextMyNotes);

    const onClose = () => closeDialogDeleteThisNote();

    const deleteThisNote = async () => {
        setIsLoading(true);
        try {
            await apiMyNotes.delete(`notes/delete-this/note_id=${noteIdSelected}`) as AxiosResponse<ISnackBarResponse>;
            setRefreshRequest((prevState: boolean) => !prevState);
        } catch (err) {
        } finally {
            setIsLoading(false);
            setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
        }
    }
    return <DialogDeleteNoteView {... { onClose, isLoading, deleteThisNote }} open={isOpenDialogDeleteThisNote} />
}

export default DialogDeleteThisNote;