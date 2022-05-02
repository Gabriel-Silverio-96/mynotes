import React, { createContext, useState } from "react";
import { IContextMyNotes } from "./types";

export const ContextMyNotes = createContext({} as IContextMyNotes);

export const ContextMyNotesProvider: React.FC = ({ children }) => {
	const [noteIdSelected, setNoteIdSelected] = useState<string>("");
	const [noteEditIdSelected, setNoteEditIdSelected] = useState<string>("");
	const [noNotesCreated, setNoNotesCreated] = useState<boolean>(true);

	const [isOpenDialogCreateNote, setOpenDialogCreateNote] = useState<boolean>(false);
	const [isOpenDialogEditNote, setIsOpenDialogEditNote] = useState<boolean>(false);
	const [isOpenDialogDeleteThisNote, setOpenDialogDeleteThisNote] = useState<boolean>(false);
	const [isOpenDialogDeleteAllNotes, setOpenDialogDeleteAllNotes] = useState<boolean>(false);

	const [refreshRequest, setRefreshRequest] = useState<boolean>(false);

	return (
		<ContextMyNotes.Provider value={
			{
				noteIdSelected,
				setNoteIdSelected,

				noteEditIdSelected, 
				setNoteEditIdSelected,

				noNotesCreated,
				setNoNotesCreated,

				isOpenDialogCreateNote,
				setOpenDialogCreateNote,

				isOpenDialogEditNote, 
				setIsOpenDialogEditNote,

				isOpenDialogDeleteThisNote,
				setOpenDialogDeleteThisNote,

				isOpenDialogDeleteAllNotes,
				setOpenDialogDeleteAllNotes,

				refreshRequest,
				setRefreshRequest
			}
		}
		>
			{children}
		</ContextMyNotes.Provider>
	);
};