import { useContext } from "react";
import { ContextMyNotes } from "../../../Context/MyNotes";

export default function useDialogMynotes() {
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
		setNoteEditIdSelected(noteId);
		setIsOpenDialogEditNote((prevState: boolean) => !prevState);
	};
	const closeDialogEditNote = () => {
		setNoteEditIdSelected("");
		setIsOpenDialogEditNote((prevState: boolean) => !prevState);
	};

	const openDialogDeleteThisNote = (noteId: string) => {
		setNoteIdSelected(noteId);
		setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
	};

	const closeDialogDeleteThisNote = () => {
		setNoteIdSelected("");
		setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
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