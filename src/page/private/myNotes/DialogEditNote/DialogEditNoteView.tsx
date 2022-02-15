import { IErrorInputMessage } from "common/types/ErrorResponse";
import Button from "components/Button";
import Dialog from "components/Dialog";
import { DialogAction } from "components/Dialog/DialogAction/styled";
import DialogForm from "components/Dialog/DialogForm";
import DialogTitle from "components/Dialog/DialogTitle";
import DialogFormField from "components/DialogFormField";
import Input from "components/FormFields/Input";
import TextArea from "components/FormFields/TextArea";
import React from "react";

const DialogEditNoteView: React.FC<any> = (props) => {
    const { editNote, errorInputMessage, onClose, onSubmit, handleChange, isLoading, open } = props;

    return (
        <Dialog open={open}>
            <DialogTitle onClick={onClose}>
                <h2>Edit Note</h2>
            </DialogTitle>
            <DialogForm method="post" onSubmit={onSubmit}>
                <DialogFormField>
                    <Input
                        label="Title note"
                        typeInput="text"
                        name="title_note"
                        id="title_note"
                        isLoadingData={isLoading}
                        defaultValue={editNote.title_note}
                        onChange={handleChange}
                        erroMessage={
                            errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
                                errorInputMessage.param === "title_note" ? errorInputMessage.msg : ""
                            ))
                        }
                    />
                </DialogFormField>
                <DialogFormField>
                    <TextArea 
                        label="Observation"
                        id="observation"
                        name="observation"                        
                        rows={5}
                        defaultValue={editNote.observation}
                        maxLength={500}
                        isLoadingData={isLoading}
                        errorMessage={errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "observation" ? errorInputMessage.msg : ""
                        ))}
                        onChange={handleChange}
                    />            
                </DialogFormField>
                <DialogAction>
                    <Button title="Delete" variant="delete" disabled={isLoading} />
                    <Button title="Save" variant="primary" disabled={isLoading} messageLoading="Saving" />
                </DialogAction>
            </DialogForm>
        </Dialog>
    )
}

export default DialogEditNoteView;