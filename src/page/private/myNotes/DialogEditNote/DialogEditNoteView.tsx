import { IErrorInputMessage } from "common/types/ErrorResponse";
import Badge from "components/Badge";
import Button from "components/Button";
import Dialog from "components/Dialog";
import { DialogAction } from "components/Dialog/DialogAction/styled";
import DialogForm from "components/Dialog/DialogForm";
import DialogTitle from "components/Dialog/DialogTitle";
import DialogFormField from "components/DialogFormField";
import Input from "components/FormFields/Input";
import TextArea from "components/FormFields/TextArea";
import React from "react";
import { IDialogEditNote } from "./types";

const DialogEditNoteView: React.FC<IDialogEditNote> = (props) => {
    const { editNote,
        errorInputMessage,
        onClose,
        onSubmit,
        handleChange,
        isLoadingEdit,
        isLoadingData,
        open,
        openDialogDeleteThisNoteInDialogEditNote
    } = props;
    const dateCreatedAt = new Date(editNote.created_at!).toLocaleDateString("en-US");
    return (
        <Dialog open={open}>
            <DialogTitle onClick={onClose}>
                <h2>Edit Note</h2>
                <Badge text={`Create at ${dateCreatedAt}`} />
            </DialogTitle>
            <DialogForm method="post" onSubmit={onSubmit}>
                <DialogFormField>
                    <Input
                        label="Title note"
                        typeInput="text"
                        name="title_note"
                        id="title_note"
                        isLoadingData={isLoadingData}
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
                        isLoadingData={isLoadingData}
                        errorMessage={errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
                            errorInputMessage.param === "observation" ? errorInputMessage.msg : ""
                        ))}
                        onChange={handleChange}
                    />
                </DialogFormField>
                <DialogAction>
                    <Button 
                        title="Delete" 
                        variant="delete" 
                        disabled={isLoadingEdit || isLoadingData} 
                        onClick={openDialogDeleteThisNoteInDialogEditNote} 
                    />
                    <Button 
                        title="Save" 
                        variant="primary" 
                        disabled={isLoadingData || isLoadingEdit} 
                        isLoading={isLoadingEdit} 
                        messageLoading="Saving" 
                    />
                </DialogAction>
            </DialogForm>
        </Dialog>
    )
}

export default DialogEditNoteView;