import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogAction from "components/Dialog/DialogAction";
import DialogBody from "components/Dialog/DialogBody";
import DialogTitle from "components/Dialog/DialogTitle";
import React from "react";
import { IDeleteAllNote } from "./types/types.component";

const DialogDeleteAllNotesView: React.FC<IDeleteAllNote> = (props) => {
	const { open, onClose, deleteAllNotes, isLoading } = props;
	return (
		<Dialog open={open} size="xs" minHeight={1}>
			<DialogTitle onClick={onClose}>
				<h2>Delete all notes</h2>
			</DialogTitle>
			<DialogBody>
				<p>Do you want to delete all notes?</p>
			</DialogBody>
			<DialogAction>
				<Button title="No" variant="secondary" onClick={onClose} disabled={isLoading} />
				<Button title="Yes" onClick={deleteAllNotes} isLoading={isLoading} messageLoading="Deleting"/>
			</DialogAction>
		</Dialog>
	);
};

export default DialogDeleteAllNotesView;