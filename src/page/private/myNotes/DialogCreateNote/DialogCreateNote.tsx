import * as variables from "assets/styles/variables";
import { AxiosError, AxiosResponse } from "axios";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/errorResponse";
import { INote } from "common/types/myNotes/notes";
import { ISnackBarResponse } from "common/types/snackBar";
import { COLOR_PICKER_INITAL_STATE } from "components/ColorPicker/util";
import React, { ChangeEvent, useContext, useState } from "react";
import { useColor } from "react-color-palette";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogCreateNoteView from "./DialogCreateNoteView";

const CREATE_NOTE_INITIAL_STATE: any = { title_note: "", observation: "" };

const DialogCreateNote: React.FC = () => {
	const { closeDialogCreateNote } = useDialogMynotes();
	const { setRefreshRequest, isOpenDialogCreateNote } = useContext(ContextMyNotes);
	const [color, setColor] = useColor("hex", variables.color_primary);

	const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
	const [createNote, setCreateNote] = useState<INote>(CREATE_NOTE_INITIAL_STATE);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setCreateNote({
			...createNote,
			[e.target.name]: e.target.value
		});
	};

	const onClose = () => {
		closeDialogCreateNote();
		setCreateNote(CREATE_NOTE_INITIAL_STATE);
		setErrorInputMessage([]);
	};

	const postSaveNote = async () => {
		setErrorInputMessage([]);
		setIsLoading(true);
		const data = { ...createNote, color_note: color.hex };
		try {
			await apiMyNotes.post("notes/create", data) as AxiosResponse<ISnackBarResponse>;
			closeDialogCreateNote();
			setRefreshRequest((prevState: boolean) => !prevState);
			setCreateNote(CREATE_NOTE_INITIAL_STATE);
			setColor(COLOR_PICKER_INITAL_STATE);
		} catch (err) {
			const error = err as AxiosError;
			const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

			if (status === 400) setErrorInputMessage(data.errors);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<DialogCreateNoteView
			{... {
				onClose,
				handleChange,
				isOpenDialogCreateNote,
				errorInputMessage,
				postSaveNote,
				isLoading,
				color,
				setColor
			}}
		/>
	);
};

export default DialogCreateNote;