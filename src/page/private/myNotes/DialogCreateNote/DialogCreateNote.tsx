import React from "react";
import DialogCreateNoteView from "./DialogCreateNoteView";
import { IDialogCreateNote } from "./types";

const DialogCreateNote: React.FC<IDialogCreateNote> = ({ onClose, handleChange, onSubmit }) => {
    return <DialogCreateNoteView {... { onClose, handleChange, onSubmit }} />
}

export default DialogCreateNote;