import { IErrorInputMessage } from "common/types/errorResponse";
import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogAction from "components/Dialog/DialogAction";
import DialogForm from "components/Dialog/DialogForm";
import DialogTitle from "components/Dialog/DialogTitle";
import DialogFormField from "components/Dialog/DialogFormField";
import Input from "components/FormFields/Input";
import React from "react";
import { IDialogCreateNote } from "./types/types.component";

const DialogCreateNoteView: React.FC<IDialogCreateNote> = (props) => {
	const { isOpenDialogCreateNote, onClose, handleChange, errorInputMessage, postSaveNote, isLoading } = props;
	return (
		<Dialog open={isOpenDialogCreateNote}>
			<DialogTitle onClick={onClose}>
				<h2>Create Note</h2>
			</DialogTitle>
			<DialogForm method="post">
				<DialogFormField>
					<Input
						label="Title note"
						typeInput="text"
						name="title_note"
						id="title_note"
						onChange={handleChange}
						data-testid="create-dialog-title"
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
						data-testid="create-dialog-observation"
					/>
					<span>
						{errorInputMessage!.map((errorInputMessage: IErrorInputMessage) => (
							errorInputMessage.param === "observation" ? errorInputMessage.msg : ""
						))}
					</span>
				</DialogFormField>
			</DialogForm>
			<DialogAction>
				<Button title="Close" onClick={onClose} variant="secondary" disabled={isLoading} />
				<Button title="Save"  isLoading={isLoading} messageLoading="Saving" onClick={postSaveNote} />
			</DialogAction>
		</Dialog>
	);
};

export default DialogCreateNoteView;