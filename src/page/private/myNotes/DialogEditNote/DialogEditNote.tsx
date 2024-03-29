import * as variables from "assets/styles/variables";
import { AxiosError, AxiosResponse } from "axios";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/errorResponse";
import { INote } from "common/types/myNotes/notes";
import { ISnackBarResponse } from "common/types/snackBar";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useColor } from "react-color-palette";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import DialogEditNoteView from "./DialogEditNoteView";
import { TEditNote } from "./types/types.component";

const EDIT_NOTE_INITIAL_STATE: TEditNote = { color_note: "", title_note: "", observation: "" };

const DialogEditNote: React.FC = () => {
	const [editNote, setEditNote] = useState<INote>(EDIT_NOTE_INITIAL_STATE);

	const { closeDialogEditNote, openDialogDeleteThisNote } = useDialogMynotes();
	const { noteEditIdSelected, isOpenDialogEditNote, setRefreshRequest } = useContext(ContextMyNotes);
	const [color, setColor] = useColor("hex", variables.color_primary);

	const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
	const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
	const [isLoadingEdit, setIsLoadingEdit] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setEditNote({
			...editNote,
			[e.target.name]: e.target.value
		});
	};

	useEffect(() => {
		const getNote = async () => {
			setErrorInputMessage([]);
			if (noteEditIdSelected) {
				setIsLoadingData(true);
				try {
					const { data } = await apiMyNotes.get(`notes/note_id=${noteEditIdSelected}`) as AxiosResponse<{ note: INote }>;
					setEditNote(data.note);
					setColor({ hex: data.note.color_note, rgb: { r: 0, g: 0, b: 0 }, hsv: { h: 0, s: 0, v: 0 } });
				} catch (err) {
				} finally {
					setTimeout(() => setIsLoadingData(false), 500);
				}
			}
		};

		getNote();
	}, [noteEditIdSelected]);

	const onClose = () => {
		closeDialogEditNote();
		setEditNote(EDIT_NOTE_INITIAL_STATE);
		setIsLoadingEdit(false);
		setErrorInputMessage([]);
	};

	const putEditNote = async () => {
		setErrorInputMessage([]);
		setIsLoadingEdit(true);
		const { title_note, observation }: INote = editNote;
		const data: INote = { color_note: color.hex, title_note, observation };
		try {
			await apiMyNotes.put(`notes/edit/note_id=${noteEditIdSelected}`, data) as AxiosResponse<ISnackBarResponse>;
			setRefreshRequest((prevState: boolean) => !prevState);
			closeDialogEditNote();
			setEditNote(EDIT_NOTE_INITIAL_STATE);
		} catch (err) {
			const error = err as AxiosError;
			const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;
			if (status === 400) setErrorInputMessage(data.errors);
		} finally {
			setIsLoadingEdit(false);
		}
	};

	const openDialogDeleteThisNoteInDialogEditNote = () => {
		openDialogDeleteThisNote(noteEditIdSelected);
		closeDialogEditNote();
		setEditNote(EDIT_NOTE_INITIAL_STATE);
	};

	return (
		<DialogEditNoteView
			{... {
				handleChange,
				isLoadingEdit,
				isLoadingData,
				errorInputMessage,
				editNote,
				putEditNote,
				isOpenDialogEditNote,
				openDialogDeleteThisNoteInDialogEditNote,
				onClose,
				color,
				setColor
			}}
		/>
	);
};

export default DialogEditNote;