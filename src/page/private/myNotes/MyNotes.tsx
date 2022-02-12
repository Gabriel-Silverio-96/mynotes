import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse } from "common/types/ErrorResponse";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiMyNotes from "service/apiMyNotes";
import { ContextMyNotes, DIALOG_DELETE_NOTE_INITIAL_STATE } from "./Context/MyNotes";
import MyNotesPageView from "./MyNotesView";
import { INoteList, INoteListData } from "./types";

const MyNotesPage: React.FC = () => {
    const dispatch = useDispatch();
    const { 
        createNote,
        setCreateNote,
        setNoNotesCreated,
        isLoadingRequest,
        noNotesCreated,
        isOpenDialogDeleteNote,
        setOpenDialogDeleteNote,
        isOpenDialogCreateNote,
        setOpenDialogCreateNote, 
        noteIdSelected, 
        setNoteIdSelected,
        refreshRequest,
    } = useContext(ContextMyNotes);

    useEffect(() => {
        const getNoteList = async () => {
            setIsLoadingNotes(true);
            try {
                const { data } = await apiMyNotes.get("notes/list") as AxiosResponse<INoteListData>;
                if (data.list_notes.length > 0) {
                    setNoteList(data.list_notes);
                    setNoNotesCreated(false);
                }

                return (setIsLoadingNotes(false), setNoNotesCreated(false))
            } catch (err) {
                const error = err as AxiosError;
                const { data } = error.response as AxiosResponse<IDataErrorResponse>;
                setIsLoadingNotes(false);
                return dispatch(snackBar(true, data.message, data.type_message));
            }
        };

        getNoteList();
    }, [dispatch, setNoNotesCreated, refreshRequest]);

    const [noteList, setNoteList] = useState([] as INoteList[]);    
    const [isLoadingNote, setIsLoadingNotes] = useState<boolean>(true);

    const openDialogDeleteThisNote = (noteId: string) => {
        setNoteIdSelected(noteId);
        setOpenDialogDeleteNote({ ...DIALOG_DELETE_NOTE_INITIAL_STATE, open: true });
    }

    const closeDialogDeleteThisNote = () => {
        setNoteIdSelected("");
        setOpenDialogDeleteNote({ ...DIALOG_DELETE_NOTE_INITIAL_STATE, open: false });
    }

    const openDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);
    const closeDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);

    const handleChangeCreateNote = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreateNote({
            ...createNote,
            [e.target.name]: e.target.value
        })
    }

    return (
        <MyNotesPageView {... {
            noNotesCreated,
            noteIdSelected,
            setNoNotesCreated,

            noteList,
            isLoadingNote,

            isOpenDialogCreateNote,
            openDialogCreateNote,
            closeDialogCreateNote,
            handleChangeCreateNote,

            isLoadingRequest,

            isOpenDialogDeleteNote,
            openDialogDeleteThisNote,
            closeDialogDeleteThisNote
        }} />

    )
}

export default MyNotesPage;