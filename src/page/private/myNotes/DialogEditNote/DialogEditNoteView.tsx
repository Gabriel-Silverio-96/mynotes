import { IErrorInputMessage } from "common/types/ErrorResponse";
import Badge from "components/Badge";
import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogAction from "components/Dialog/DialogAction";
import DialogForm from "components/Dialog/DialogForm";
import DialogTitle from "components/Dialog/DialogTitle";
import DialogFormField from "components/Dialog/DialogFormField";
import Input from "components/FormFields/Input";
import TextArea from "components/FormFields/TextArea";
import React from "react";
import { IDialogEditNote } from "./types/types.component";

const DialogEditNoteView: React.FC<IDialogEditNote> = (props) => {
	const { editNote,
		errorInputMessage,
		onClose,
		putEditNote,
		handleChange,
		isLoadingEdit,
		isLoadingData,
		isOpenDialogEditNote,
		openDialogDeleteThisNoteInDialogEditNote
	} = props;
	const dateCreatedAt = new Date(editNote.created_at!).toLocaleDateString("en-US");
	return (
		<Dialog open={isOpenDialogEditNote}>
			<DialogTitle onClick={onClose}>
				<h2>Edit Note</h2>
				{!isLoadingData && <Badge text={`Create at ${dateCreatedAt}`} />}
			</DialogTitle>
			<DialogForm method="post">
				<DialogFormField>
					<Input
						label="Title note"
						typeInput="text"
						name="title_note"
						id="title_note"
						isLoadingData={isLoadingData}
						defaultValue={editNote.title_note}
						onChange={handleChange}
						errorMessage={
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
			</DialogForm>
			<DialogAction>
				<Button
					title="Delete"
					variant="danger"
					disabled={isLoadingEdit || isLoadingData}
					onClick={openDialogDeleteThisNoteInDialogEditNote}
				/>
				<Button
					title="Save"
					disabled={isLoadingData || isLoadingEdit}
					isLoading={isLoadingEdit}
					messageLoading="Saving"
					onClick={putEditNote}
				/>
			</DialogAction>
		</Dialog>
	);
};

export default DialogEditNoteView;