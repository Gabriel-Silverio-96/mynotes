import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import { INote } from "common/types/_MyNotes/notes";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import useDialogMynotes from "../common/hooks/useDialogMynotes";
import { ContextMyNotes } from "../Context/MyNotes";
import NoteListView from "./NoteListView";
import { INoteListData } from "./types";

const NoteList: React.FC = () => {
    const dispatch = useDispatch();
    const { noNotesCreated, setNoNotesCreated, refreshRequest } = useContext(ContextMyNotes);
    const { openDialogDeleteThisNote } = useDialogMynotes();

    const [notes, setNotes] = useState([] as INote[]);
    const [isLoadingNote, setIsLoadingNotes] = useState<boolean>(true);

    useEffect(() => {
        const getNoteList = async () => {
            setIsLoadingNotes(true);
            try {
                const { data } = await apiMyNotes.get("notes/list") as AxiosResponse<INoteListData>;
                if (data.list_notes.length > 0) {
                    setNotes(data.list_notes);
                    setNoNotesCreated(false);
                } else {
                    setNoNotesCreated(true);
                }
                return setIsLoadingNotes(false);
            } catch (err) {
                const error = err as AxiosError;
                const { data } = error.response as AxiosResponse<IDataErrorResponse>;
                setIsLoadingNotes(false);
                return dispatch(snackBar(true, data.message, data.type_message));
            }
        };

        getNoteList();
    }, [dispatch, setNoNotesCreated, refreshRequest]);

    return <NoteListView {...{ notes, isLoadingNote, openDialogDeleteThisNote, noNotesCreated }} />
}

export default NoteList;