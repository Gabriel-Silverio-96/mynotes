import React from "react";
import DialogCreateNoteView from "./DialogCreateNoteView";
import { IDialogCreateNote } from "./types";

const DialogCreateNote: React.FC<IDialogCreateNote> = ({ open, onClose, handleChange, onSubmit }) => {
    return <DialogCreateNoteView {... { open, onClose, handleChange, onSubmit }} />
}

export default DialogCreateNote;