import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogAction from "components/Dialog/DialogAction";
import DialogForm from "components/Dialog/DialogForm";
import DialogTitle from "components/Dialog/DialogTitle";
import DialogFormField from "components/DialogFormField";
import React from "react";
import { IDialogCreateNote } from "./types";

const DialogCreateNoteView: React.FC<IDialogCreateNote> = ({ onClose, handleChange, onSubmit }) => {
    return (
        <Dialog open>
            <DialogTitle onClick={onClose}>
                <h2>Create Note</h2>
            </DialogTitle>

            <DialogForm method="post" onSubmit={onSubmit}>
                <DialogFormField>
                    <label htmlFor="title_note">Title note</label>
                    <input
                        type="text"
                        name="title_note"
                        id="title_note"
                        onChange={handleChange}
                    />
                    <span></span>
                </DialogFormField>
                <DialogFormField>
                    <label htmlFor="observation">Observation</label>
                    <textarea
                        name="observation"
                        id="observation"
                        rows={5}
                        maxLength={500}
                        onChange={handleChange}
                    />
                    <span></span>
                </DialogFormField>
                <DialogAction>
                    <Button title="Close" onClick={onClose} variant="secondary"/>
                    <Button title="Save" variant="primary" />
                </DialogAction>
            </DialogForm>
        </Dialog>
    )
}

export default DialogCreateNoteView;