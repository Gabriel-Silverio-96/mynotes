import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogAction from "components/Dialog/DialogAction";
import DialogForm from "components/Dialog/DialogForm";
import DialogTitle from "components/Dialog/DialogTitle";
import DialogFormField from "components/DialogFormField";
import Input from "components/FormFields/Input";
import React from "react";
import { IDialogCreateNote } from "./types";

const DialogCreateNoteView: React.FC<IDialogCreateNote> = (props) => {
    const { open, onClose, handleChange, errorInputMessage, onSubmit, isLoading } = props;
    return (
        <Dialog open={open}>
            <DialogTitle onClick={onClose}>
                <h2>Create Note</h2>
            </DialogTitle>
            <DialogForm method="post" onSubmit={onSubmit}>
                <DialogFormField>
                    <Input
                        label="Title note"
                        typeInput="text"
                        name="title_note"
                        id="title_note"
                        onChange={handleChange}
                        errorMessage={
                            errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
                                errorInputMessage.param === "title_note" ? errorInputMessage.msg : ""
                            ))
                        }
                    />
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
                    <span>
                        {errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "observation" ? errorInputMessage.msg : ""
                        ))}
                    </span>
                </DialogFormField>
                <DialogAction>
                    <Button title="Close" onClick={onClose} variant="secondary" disabled={isLoading} />
                    <Button title="Save" variant="primary" isLoading={isLoading} messageLoading="Saving"/>
                </DialogAction>
            </DialogForm>
        </Dialog>
    )
}

export default DialogCreateNoteView;