import { useContext } from "react";
import { ContextMyNotes } from "../../../Context/MyNotes";

export default function useDialogMynotes() {
    const {
        setOpenDialogDeleteThisNote,
        setOpenDialogCreateNote,
        setNoteIdSelected,
        setOpenDialogDeleteAllNotes,
    } = useContext(ContextMyNotes);

    const openDialogDeleteThisNote = (noteId: string) => {
        setNoteIdSelected(noteId);
        setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
    }

    const closeDialogDeleteThisNote = () => {
        setNoteIdSelected("");
        setOpenDialogDeleteThisNote((prevState: boolean) => !prevState);
    }

    const openDialogDeleteAllNotes = () => {
        setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
    }

    const closeDialogDeleteAllNotes = () => {
        setOpenDialogDeleteAllNotes((prevState: boolean) => !prevState);
    }

    const openDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);
    const closeDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);

    return {
        openDialogDeleteThisNote,
        closeDialogDeleteThisNote,
        openDialogDeleteAllNotes,
        closeDialogDeleteAllNotes,
        openDialogCreateNote,
        closeDialogCreateNote
    }
}