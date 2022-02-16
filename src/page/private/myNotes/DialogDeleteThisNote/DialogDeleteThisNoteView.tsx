import Button from "components/Button";
import Dialog from "components/Dialog";
import { DialogAction } from "components/Dialog/DialogAction/styled";
import DialogBody from "components/Dialog/DialogBody";
import DialogTitle from "components/Dialog/DialogTitle";
import React from "react";
import { IDialogDeleteThisNote } from "./types";

const DialogDeleteThisNote: React.FC<IDialogDeleteThisNote> = ({ open, onClose, isLoading, deleteThisNote }) => {
    return (
        <Dialog open={open} size="xs" minHeight={1}>
            <DialogTitle onClick={onClose}>
                <h2>Delete this note</h2>
            </DialogTitle>
            <DialogBody>
                <p>Do you want to delete this note?</p>
            </DialogBody>
            <DialogAction>
                <Button title="No" variant="secondary" onClick={onClose} disabled={isLoading} />
                <Button title="Yes" onClick={deleteThisNote} isLoading={isLoading} messageLoading="Deleting" />
            </DialogAction>
        </Dialog>
    )
}

export default DialogDeleteThisNote;