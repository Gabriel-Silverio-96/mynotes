import React from "react";
import BarActions from "./BarActions";
import DialogCreateNote from "./DialogCreateNote";
import DialogDeleteAllNotes from "./DialogDeleteAllNotes";
import DialogDeleteThisNote from "./DialogDeleteThisNote";
import DialogEditNote from "./DialogEditNote";
import NoteList from "./NoteList";

const MyNotesPageView: React.FC = () => {
	return (
		<>
			<BarActions />
			<DialogCreateNote />
			<DialogEditNote />
			<DialogDeleteThisNote />
			<DialogDeleteAllNotes />
			<NoteList />
		</>
	);
};

export default MyNotesPageView;