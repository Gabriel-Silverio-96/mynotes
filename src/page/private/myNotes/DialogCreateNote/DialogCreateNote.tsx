import React from "react";
import DialogCreateNoteView from "./DialogCreateNoteView";
import { IDialogCreateNote } from "./types";

const DialogCreateNote: React.FC<IDialogCreateNote> = (props) => {
    const { open, onClose, handleChange, errorInputMessage, onSubmit, isLoading } = props;
    return <DialogCreateNoteView {... { open, onClose, handleChange, errorInputMessage, onSubmit, isLoading }} />
}

export default DialogCreateNote;