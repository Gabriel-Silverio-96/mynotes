import React, { useContext } from "react";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import BarActionsView from "./BarActionsView";

const BarActions: React.FC = () => {   
	const { noNotesCreated } = useContext(ContextMyNotes);
	const { openDialogDeleteAllNotes, openDialogCreateNote } = useDialogMynotes();

	return <BarActionsView {... {openDialogDeleteAllNotes, noNotesCreated, openDialogCreateNote}} />;
};

export default BarActions;