import { AxiosResponse } from "axios";
import { INote } from "common/types/_MyNotes/notes";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import NoteListView from "./NoteListView";
import { INoteListData } from "./types/types.component";

const NoteList: React.FC = () => {
	const dispatch = useDispatch();

	const [notes, setNotes] = useState([] as INote[]);
	const { refreshRequest, noNotesCreated, setNoNotesCreated } = useContext(ContextMyNotes);
	const { openDialogDeleteThisNote, openDialogEditNote } = useDialogMynotes();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const getNoteList = async () => {
			setIsLoading(true);
			try {
				const { data } = await apiMyNotes.get("notes/list") as AxiosResponse<INoteListData>;
				if (data.list_notes.length > 0) {
					setNotes(data.list_notes);
					setNoNotesCreated(false);
				} else {
					setNoNotesCreated(true);
				}
			} catch (err) {
				console.error("NoteList:", err);
			} finally {
				setIsLoading(false);
			}
		};

		getNoteList();

		return () => setIsLoading(false);
	}, [dispatch, setNoNotesCreated, refreshRequest]);

	return <NoteListView {...{ notes, isLoading, openDialogDeleteThisNote, openDialogEditNote, noNotesCreated }} />;
};

export default NoteList;