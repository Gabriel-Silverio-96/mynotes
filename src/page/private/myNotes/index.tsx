import React, { useEffect, useState, useContext, useCallback, ChangeEvent, FormEvent } from "react";

import { ContextGlobal } from "provider/context";
import { useHistory } from "react-router";

import apiMyNotes from "service/apiMyNotes";
import { AxiosError } from "axios";

//Components
import Header from "components/Header/index";
import ModalMain from "components/ModalMain";
import Layout from "components/Layout";
import NoteCard from "components/UI/NoteCard";
import ModalDelete from "components/ModalDelete";
import NoNotes from "components/NoNotes";
import Loading from "components/Loading";

//Util
import useThemeStorage from "util/useThemeStorage";

//Types
import { InputRequiredProps, NotesListProps, RequestDeleteProps, RequestProps } from "./types";
import { ContextGlobalProps } from "provider/types";

//Assets
import { NoteCardWrapper } from "./styled";
import light from "assets/styles/themes/light";
import dark from "assets/styles/themes/dark";

const Index: React.FC = () => {
    const {
        modalState,
        setModalState,
        modalDelete,
        setModalDelete,
        modalViewEditNote,
        setModalViewEditNote,
        setSnackBar,
    } = useContext<ContextGlobalProps>(ContextGlobal);

    const history = useHistory();

    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    const [notesList, setNoteList] = useState([] as NotesListProps[]);
    const [noteIdSelected, setNoteIdSelected] = useState<string>("");
    const [noteEditData, setNoteEditData] = useState({} as NotesListProps);
    const [refreshRequest, setRefreshRequest] = useState<boolean>(true);
    const [noNotesCreated, setNoNotesCreated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [inputRequired, setInputRequired] = useState<InputRequiredProps>({
        message_erro_input_required: ""
    })

    const newNoteInitialState = {
        color_note: "#9C10FF",
        title_note: "",
        observation: "",
    }
    const [newNote, setNewNote] = useState<NotesListProps>(newNoteInitialState);

    useEffect(() => {
        const request = async () => {
            setIsLoading(true);
            try {
                const { status, data } = await apiMyNotes.get("notes/list") as RequestProps;
                if (status === 200 && data.list_notes.length > 0) {
                    setNoteList(data.list_notes);
                    setNoNotesCreated(false);
                } else {
                    setNoNotesCreated(true);
                }
            } catch (error) {
                const errorMessage = error as AxiosError;
                //@ts-ignore
                const message = errorMessage.response!.data.message;
                setSnackBar({
                    isActive: true,
                    typeMessage: "error",
                    message: `Error: ${message}`
                })

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

            return setTimeout(() => setIsLoading(false), 500)
        }
        request()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, refreshRequest, noNotesCreated])

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
        setInputRequired({
            message_erro_input_required: ""
        })

        try {
            if (modalViewEditNote) {
                const endPoint = `notes/edit/note_id=${noteIdSelected}`;

                const { status } = await apiMyNotes.put(endPoint, noteEditData);
                if (status === 200) {
                    setModalState(false);
                    setRefreshRequest(prevState => !prevState);
                    setNewNote(newNoteInitialState);
                    setSnackBar({
                        isActive: true,
                        typeMessage: "success",
                        message: "Note edited"
                    })
                }

            } else {
                const { status } = await apiMyNotes.post("notes/create", newNote);
                if (status === 200) {
                    setModalState(false);
                    setRefreshRequest(prevState => !prevState);
                    setNewNote(newNoteInitialState);
                    setSnackBar({
                        isActive: true,
                        typeMessage: "success",
                        message: "New note created"
                    })
                }
            }

        } catch (error) {
            const errorMessage = error as AxiosError;
            const status = errorMessage.response!.status;
            //@ts-ignore
            const message = errorMessage.response!.data.message;
            setSnackBar({
                isActive: true,
                typeMessage: "error",
                message: `Error: ${message}`
            })

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
            console.error(error);
        }
    }

    const showModalViewEditNote = (noteId: string) => {
        setNoteIdSelected(noteId);
        setModalViewEditNote(true);
        setModalState(true);
        setInputRequired({
            message_erro_input_required: ""
        })

        notesList.filter((note: NotesListProps) => {
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
        try {
            const endPoint = `notes/delete-this/note_id=${noteIdSelected}`
            const request = await apiMyNotes.delete(endPoint) as RequestDeleteProps;
            if (request.status === 200) {
                setModalDelete({
                    modalType: "delete",
                    isActive: false,
                })
                setNoteIdSelected("");
                setRefreshRequest(prevState => !prevState);
                setModalState(false);
                setSnackBar({
                    isActive: true,
                    typeMessage: "success",
                    message: "Note successfully deleted"
                })
            }

        } catch (error) {
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
        try {
            const request = await apiMyNotes.delete("/notes/delete-all") as RequestDeleteProps;
            if (request.status === 200) {
                setModalDelete({
                    modalType: "deleteAll",
                    isActive: false,
                })
                setNoteIdSelected("");
                setRefreshRequest(prevState => !prevState);
                setSnackBar({
                    isActive: true,
                    typeMessage: "success",
                    message: "Successfully deleted all notes"
                })
            }

        } catch (error) {
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
        <Layout themeStyle={theme}>
            <Header
                toggleTheme={toggleTheme}
                themeTitle={theme.title}
                thereAreNotes={notesList.length === 0 ? false : true}
                showModalDeleteAllNote={() => showModalDelete("deleteAll")}
                isActiveNav={true}
            />

            {
                modalState && (
                    <ModalMain
                        onSubmit={saveNote}
                        onChange={handleChange}
                        noteEditData={noteEditData}
                        deleteNote={() => showModalDelete("delete", noteIdSelected)}
                        titleNoteErro={inputRequired.message_erro_input_required}
                    />
                )
            }

            {
                modalDelete.isActive && (
                    <ModalDelete
                        title={
                            modalDelete.modalType === "delete"
                                ? "Delete note"
                                : "Delete all note"
                        }
                        body={
                            modalDelete.modalType === "delete"
                                ? "Do you want to delete this note?"
                                : "Do you want to delete all note?"
                        }
                        actionMain={
                            modalDelete.modalType === "delete"
                                ? () => deleteThisNote()
                                : () => deleteAllNotes()
                        }
                    />
                )
            }

            <div style={{marginBottom: "1rem"}}>
                <Loading isLoading={isLoading} />
            </div>

            <NoteCardWrapper>
                {notesList.length > 0 && !noNotesCreated &&
                    notesList.map((note: NotesListProps) => (
                        <NoteCard
                            key={note.note_id}
                            id={note.note_id}
                            colorNote={note.color_note}
                            titleNote={note.title_note}
                            observation={note.observation}
                            showModalDeleteThisNote={() => showModalDelete("delete", note.note_id!)}
                            viewEditNote={() => showModalViewEditNote(note.note_id!)}
                        />
                    ))}

                {noNotesCreated && !isLoading && <NoNotes />}

            </NoteCardWrapper>
        </Layout>
    );
}

export default Index;