import { AxiosResponse } from "axios";
import { ISnackBarResponse } from "common/types/snackBar";
import React, { useContext, useState } from "react";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";

const DialogDeleteAllNotes: React.FC = () => {
	const { closeDialogDeleteAllNotes } = useDialogMynotes();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setRefreshRequest, setOpenDialogDeleteAllNotes, isOpenDialogDeleteAllNotes } = useContext(ContextMyNotes);

	const onClose = () => closeDialogDeleteAllNotes();

	const deleteAllNotes = async () => {
		setIsLoading(true);
		try {
            await apiMyNotes.delete("notes/delete-all") as AxiosResponse<ISnackBarResponse>;
            setRefreshRequest((prevState: boolean) => !prevState);
		} catch (err) {
			console.error("DialogDeleteAllNotes:", err);
		} finally {
			setIsLoading(false);
			setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
		}
	};
	return <DialogDeleteAllNotesView {...{ onClose, isLoading, deleteAllNotes }} open={isOpenDialogDeleteAllNotes} />;
};

export default DialogDeleteAllNotes;