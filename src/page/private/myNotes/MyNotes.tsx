import { AxiosError, AxiosResponse } from "axios";
import { snackBar } from "common/store/snackBar/snackBar.action";
import { IDataErrorResponse, IErrorInputMessage } from "common/types/ErrorResponse";
import { ISnackBarResponse } from "common/types/SnackBar";
import { INote } from "common/types/_MyNotes/notes";
import { ContextGlobal } from "provider/context";
import { ContextGlobalProps } from "provider/types";
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import apiMyNotes from "service/apiMyNotes";
import MyNotesPageView from "./MyNotesView";
import { INoteList, INoteListData, InputRequiredProps, NotesListProps, RequestDeleteProps } from "./types";

const CREATE_NOTE_INITIAL_STATE = { color_note: "#9C10FF", title_note: "", observation: "" };

const MyNotesPage: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [noteList, setNoteList] = useState([] as INoteList[]);
    const [noNotesCreated, setNoNotesCreated] = useState<boolean>(true);

    const [isLoadingNote, setIsLoadingNotes] = useState<boolean>(true);
    const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);
    const [errorInputMessage, setErrorInputMessage] = useState<IErrorInputMessage[]>([]);

    const [isOpenDialogCreateNote, setOpenDialogCreateNote] = useState<boolean>(false);
    const openDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);
    const closeDialogCreateNote = () => setOpenDialogCreateNote((prevState: boolean) => !prevState);

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
    }, [dispatch, isLoadingRequest]);

    const handleChangeCreateNote = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCreateNote({
            ...createNote,
            [e.target.name]: e.target.value
        })
    }

    const [createNote, setCreateNote] = useState<INote>(CREATE_NOTE_INITIAL_STATE);
    const createNoteSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorInputMessage([]);
        setIsLoadingRequest(true);
        try {
            const { data } = await apiMyNotes.post("notes/create", createNote) as AxiosResponse<ISnackBarResponse>;
            dispatch(snackBar(true, data.message, data.type_message));
            setIsLoadingRequest(false);
            setOpenDialogCreateNote((prevState: boolean) => !prevState);
        } catch (err) {
            const error = err as AxiosError;
            const { status, data } = error.response as AxiosResponse<IDataErrorResponse>;

            if (status === 400) setErrorInputMessage(data.errors);
            if (status === 403 || status === 500) dispatch(snackBar(true, data.message, data.type_message));

            return setIsLoadingRequest(false);
        } finally {
            setIsLoadingRequest(false);
        }
    }

    const {
        modalState,
        setModalState,
        modalDelete,
        setModalDelete,
        modalViewEditNote,
        setModalViewEditNote,
    } = useContext<ContextGlobalProps>(ContextGlobal);


    const [noteIdSelected, setNoteIdSelected] = useState<string>("");
    const [noteEditData, setNoteEditData] = useState({} as NotesListProps);
    const [refreshRequest, setRefreshRequest] = useState<boolean>(false);
    const [isLoadingSaveEdit, setIsLoadingSaveEdit] = useState<boolean>(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

    const [inputRequired, setInputRequired] = useState<InputRequiredProps>({
        message_erro_input_required: ""
    })

    const newNoteInitialState = {
        color_note: "#9C10FF",
        title_note: "",
        observation: "",
    }
    const [newNote, setNewNote] = useState<NotesListProps>(newNoteInitialState);

    // useEffect(() => {
    //     const request = async () => {
    //         setIsLoading(true);
    //         try {
    //             const { status, data } = await apiMyNotes.get("notes/list") as RequestProps;
    //             if (status === 200 && data.list_notes.length > 0) {
    //                 setNotesList(data.list_notes);
    //                 setNoNotesCreated(false);
    //             } else {
    //                 setNoNotesCreated(true);
    //             }
    //         } catch (error) {
    //             const errorMessage = error as AxiosError;
    //             //@ts-ignore
    //             const message = errorMessage.response!.data.message;
    //             dispatch(snackBar(true, `Error: ${message}`, "error"));
    //             const status = errorMessage.response!.status;

    //             if (status === 401) {
    //                 localStorage.removeItem("token");
    //                 apiMyNotes.defaults.headers!.Authorization = "";
    //                 history.push("/");
    //             }

    //             if (status === 500) {
    //                 history.push("/");
    //             }
    //             console.error(error);
    //         }

    //         return setTimeout(() => setIsLoading(false), 500)
    //     }
    //     request()

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [history, refreshRequest, noNotesCreated])

    useEffect(() => {
        setInputRequired({
            message_erro_input_required: ""
        })
    }, [modalState])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!modalViewEditNote) {
            setNewNote({
                ...newNote,
                [e.target.name]: e.target.value
            })
        } else {
            setNoteEditData({
                ...noteEditData,
                [e.target.name]: e.target.value
            })
        }
    }

    const saveNote = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoadingSaveEdit(true);
        setInputRequired({
            message_erro_input_required: ""
        })

        try {
            if (modalViewEditNote) {
                const endPoint = `notes/edit/note_id=${noteIdSelected}`;

                const { status } = await apiMyNotes.put(endPoint, noteEditData);
                if (status === 200) {
                    setIsLoadingSaveEdit(false);
                    setModalState(false);
                    setRefreshRequest(prevState => !prevState);
                    setNewNote(newNoteInitialState);
                    dispatch(snackBar(true, "Note edited"));
                }

            } else {
                const { status } = await apiMyNotes.post("notes/create", newNote);
                if (status === 200) {
                    setIsLoadingSaveEdit(false);
                    setModalState(false);
                    setRefreshRequest(prevState => !prevState);
                    setNewNote(newNoteInitialState);
                    dispatch(snackBar(true, "New note created"));
                }
            }

        } catch (error) {
            const errorMessage = error as AxiosError;
            const status = errorMessage.response!.status;
            const STATUS_CODE = [422, 401];

            if (status === 422) {
                const messageErro = errorMessage.response!.data;
                setInputRequired(messageErro)
            }

            if (status === 401) {
                localStorage.removeItem("token");
                apiMyNotes.defaults.headers!.Authorization = "";
                history.push("/");
            }

            if (status === 500) {
                history.push("/");
            }

            if (!STATUS_CODE.includes(status)) {
                //@ts-ignore
                const message = errorMessage.response!.data.message;
                dispatch(snackBar(true, `Error: ${message}`, "error"));
            }

            console.error(error);
            setIsLoadingSaveEdit(false);
        }
    }

    const showModalViewEditNote = (noteId: string) => {
        setNoteIdSelected(noteId);
        setModalViewEditNote(true);
        setModalState(true);
        setInputRequired({
            message_erro_input_required: ""
        })

        noteList.filter((note: NotesListProps) => {
            if (note.note_id === noteId) {
                setNoteEditData(note);
            }

            return true;
        })
    }

    const showModalDelete = (modalType: "delete" | "deleteAll", noteId?: string) => {
        setNoteIdSelected(noteId || "");
        setModalState(false);
        setModalDelete({
            modalType: modalType,
            isActive: true,
        })
    }

    const deleteThisNote = async () => {
        setIsLoadingDelete(true);
        try {
            const endPoint = `notes/delete-this/note_id=${noteIdSelected}`
            const request = await apiMyNotes.delete(endPoint) as RequestDeleteProps;
            if (request.status === 200) {
                setIsLoadingDelete(false);
                setModalDelete({
                    modalType: "delete",
                    isActive: false,
                })
                setNoteIdSelected("");
                setRefreshRequest(prevState => !prevState);
                setModalState(false);
                dispatch(snackBar(true, "Note successfully deleted"));
            }

        } catch (error) {
            setIsLoadingDelete(false);
            const errorMessage = error as AxiosError;
            const status = errorMessage.response!.status;

            if (status === 401) {
                localStorage.removeItem("token");
                apiMyNotes.defaults.headers!.Authorization = "";
                history.push("/");
            }

            if (status === 500) {
                history.push("/");
            }
            console.error(error);
        }
    }

    const deleteAllNotes = async () => {
        setIsLoadingDelete(true);
        try {
            const request = await apiMyNotes.delete("/notes/delete-all") as RequestDeleteProps;
            if (request.status === 200) {
                setIsLoadingDelete(false);
                setModalDelete({
                    modalType: "deleteAll",
                    isActive: false,
                })
                setNoteIdSelected("");
                setRefreshRequest(prevState => !prevState);
                dispatch(snackBar(true, "Successfully deleted all notes"));
            }

        } catch (error) {
            setIsLoadingDelete(false);
            const errorMessage = error as AxiosError;
            const status = errorMessage.response!.status;

            if (status === 401) {
                localStorage.removeItem("token");
                apiMyNotes.defaults.headers!.Authorization = "";
                history.push("/");
            }

            if (status === 500) {
                history.push("/");
            }
            console.error(error);
        }
    }

    return (
        <MyNotesPageView {... {
            noNotesCreated,
            showModalDelete,
            modalState,
            isLoadingSaveEdit,
            saveNote,
            handleChange,
            noteEditData,
            noteIdSelected,
            inputRequired,
            modalDelete,
            isLoadingDelete,
            deleteThisNote,
            deleteAllNotes,
            setNoNotesCreated,
            showModalViewEditNote,

            noteList,
            isLoadingNote,

            isOpenDialogCreateNote,
            openDialogCreateNote,
            closeDialogCreateNote,
            handleChangeCreateNote,
            createNoteSubmit,

            errorInputMessage,
            isLoadingRequest
        }} />
    )
}

export default MyNotesPage;