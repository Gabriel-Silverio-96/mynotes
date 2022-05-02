import { useContext } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { ContextMyNotes } from "../../../Context/MyNotes";
import { IUseDialogMynotes } from "./types/types.hook";

export default function useDialogMynotes(): IUseDialogMynotes {
	const {
		setOpenDialogDeleteThisNote,
		setOpenDialogCreateNote,
		setNoteIdSelected,
		setNoteEditIdSelected,
		setOpenDialogDeleteAllNotes,
		setIsOpenDialogEditNote
	} = useContext(ContextMyNotes);

	const openDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);
	const closeDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);

	const openDialogEditNote = (noteId: string) => {
		unstable_batchedUpdates(() => {
			setNoteEditIdSelected(noteId);
			setIsOpenDialogEditNote((prevState: boolean) => !prevState);
		});
	};

	const closeDialogEditNote = () => {
		unstable_batchedUpdates(() => {
			setNoteEditIdSelected("");
			setIsOpenDialogEditNote((prevState: boolean) => !prevState);
		});
	};

	const openDialogDeleteThisNote = (noteId: string) => {
		unstable_batchedUpdates(() => {
			setNoteIdSelected(noteId);
			setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
		});
	};

	const closeDialogDeleteThisNote = () => {
		unstable_batchedUpdates(() => {
			setNoteIdSelected("");
			setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
		});
	};

	const openDialogDeleteAllNotes = () => {
		setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
	};

	const closeDialogDeleteAllNotes = () => {
		setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
	};

	return {
		openDialogCreateNote,
		closeDialogCreateNote,

		openDialogEditNote,
		closeDialogEditNote,

		openDialogDeleteThisNote,
		closeDialogDeleteThisNote,

		openDialogDeleteAllNotes,
		closeDialogDeleteAllNotes
	};
}