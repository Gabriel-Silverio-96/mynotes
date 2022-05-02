import { AxiosError, AxiosResponse } from "axios";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/errorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import { INote } from "common/types/myNotes/notes";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
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

	const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);
	const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
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
				} catch (err) {
					console.error("DialogEditNote:", err);
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

		const editNoteBody = { color_note: editNote.color_note, title_note: editNote.title_note, observation: editNote.observation };
		try {
            await apiMyNotes.put(`notes/edit/note_id=${noteEditIdSelected}`, editNoteBody) as AxiosResponse<ISnackBarResponse>;
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
				onClose
			}}
		/>
	);
};

export default DialogEditNote;