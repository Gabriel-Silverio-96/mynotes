import React, { useEffect, useState, useContext, useCallback, ChangeEvent, FormEvent } from "react";
import { ContextGlobal } from "provider/context";

import light from "assets/styles/themes/light";
import dark from "assets/styles/themes/dark";

import Header from "components/Header/index";
import ModalMain from "components/ModalMain";
import NoNotes from "components/NoNotes";
import NoteCard from "components/UI/NoteCard";
import ModalGeneric from "components/ModalGeneric";

import useThemeStorage from "util/useThemeStorage";
import dateNote from "util/dateNote";

import { NoteCardWrapper } from "./styled";
import { NoteProps, NotesListProps } from "./types";
import { ContextGlobalProps } from "provider/types";
import Layout from "components/Layout";
import apiMyNotes from "service/apiMyNotes";
import { AxiosError } from "axios";
import { useHistory } from "react-router";

const Index: React.FC = () => {
    const [notesList, setNoteList] = useState([] as NotesListProps[]);
    const history = useHistory();

    useEffect(() => {
        const request = async () => {
            try {
                const { status, data } = await apiMyNotes.get("notes/list") as any
                if (status === 200) {
                    setNoteList(data.list_notes)
                }
            } catch (error) {
                const errorMessge = error as AxiosError;
                const status = errorMessge.response!.status;

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
        request()
    }, [history])














    const {
        modalState,
        setModalState,
        modalDeleteThisNote,
        setModalDeleteThisNote,
        modalDeleteAllNote,
        setModalDeleteAllNote,
        modalViewEditNote,
        setModalViewEditNote
    } = useContext<ContextGlobalProps>(ContextGlobal);

    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    const [idNote, setIdNote] = useState<number>(0);
    const [isNewNote, setIsNewNote] = useState<boolean>(false);
    const [titleNoteErro, setTitleNoteErro] = useState<string>("");
    const [noteEditData, setNoteEditData] = useState({} as NoteProps)

    const newNoteInitialState = {
        id: 0,
        colorNote: "#9C10FF",
        titleNote: "",
        observation: "",
        date: dateNote,
    }

    const [newNote, setNewNote] = useState<NoteProps>(newNoteInitialState);

    const storage = JSON.parse(localStorage.getItem("notes") || "[]");
    const [noteStorage, setNoteStorage] = useState<Array<NoteProps>>(storage);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!modalViewEditNote) {
            setNewNote({
                ...newNote,
                id: Math.floor(Math.random() * 1000),
                [e.target.name]: e.target.value
            })
        } else {
            setNoteEditData({
                ...noteEditData,
                [e.target.name]: e.target.value
            })
        }
    }

    const saveNote = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!modalViewEditNote) {
            if (newNote.titleNote === "") {
                setTitleNoteErro("Add title");
            } else {
                setTitleNoteErro("")

                const storage = JSON.parse(localStorage.getItem("notes") || "[]");
                if (storage !== null) {
                    localStorage.setItem("notes", JSON.stringify([...storage, newNote]))
                } else {
                    localStorage.setItem("notes", JSON.stringify([newNote]))
                }

                setModalState(!modalState);
                setNewNote(newNoteInitialState);
                setIsNewNote(!isNewNote);
            }

        } else {

            if (noteEditData.titleNote === "") {
                setTitleNoteErro("Add title");
            } else {
                setTitleNoteErro("")

                noteStorage.filter((note: NoteProps, index: number) => {
                    if (note.id === Number(idNote)) {
                        const storageGet = JSON.parse(localStorage.getItem("notes") || "[]");
                        storageGet.splice(index, 1, noteEditData)

                        localStorage.setItem("notes", JSON.stringify(storageGet));
                        setIsNewNote(!isNewNote);
                        setModalState(!modalState);
                    }

                    return true
                })
            }
        }
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("notes") || "[]");
        return setNoteStorage(storage)
    }, [isNewNote]);

    useEffect(() => {
        if (titleNoteErro !== "" && !modalState) {
            setTitleNoteErro("")
        }
    }, [modalState, titleNoteErro])

    const showModalDeleteThisNote = (idNote: string) => {
        setModalDeleteThisNote(!modalDeleteAllNote);
        setIdNote(Number(idNote));
        setModalState(false);
    }

    const showModalDeleteAllNote = () => {
        setModalDeleteAllNote(true);
    }

    const closeModalDeleteThisNote = () => {
        setModalDeleteThisNote(!modalDeleteThisNote)
    }

    const closeModalDeleteAllNote = () => {
        setModalDeleteAllNote(!modalDeleteAllNote)
    }

    const deleteAllNotes = () => {
        localStorage.removeItem("notes");
        setNoteStorage([]);
        setModalDeleteAllNote(!modalDeleteAllNote)
    }

    const deleteThisNote = () => {
        noteStorage.filter((note: NoteProps, index: number) => {
            if (note.id === idNote) {
                storage.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify([...storage]));

                setNoteStorage(storage);
                setModalDeleteThisNote(!modalDeleteThisNote);
            }

            return true
        })
    }

    const showModalVieEditNote = (id: string) => {
        setModalViewEditNote(true);
        setModalState(!modalState);

        noteStorage.filter((note: NoteProps, index: number) => {
            if (note.id === Number(id)) {
                setNoteEditData(note)
                setIdNote(note.id);
            }

            return true
        })
    }

    return (
        <Layout themeStyle={theme}>
            <div className="container">
                <Header
                    toggleTheme={toggleTheme}
                    themeTitle={theme.title}
                    thereAreNotes={noteStorage === null || noteStorage.length === 0 ? false : true}
                    showModalDeleteAllNote={showModalDeleteAllNote}
                />

                {
                    modalState && (
                        <ModalMain
                            onSubmit={saveNote}
                            onChange={handleChange}
                            noteEditData={noteEditData}
                            deleteNote={() => showModalDeleteThisNote(idNote.toString())}
                            titleNoteErro={titleNoteErro}
                        />
                    )
                }

                {
                    modalDeleteThisNote && (
                        <ModalGeneric
                            title="Delete note"
                            body="Do you want to delete this note?"
                            onClick={deleteThisNote}
                            closeModal={closeModalDeleteThisNote}
                        />
                    )
                }

                {
                    modalDeleteAllNote && (
                        <ModalGeneric
                            title="Delete all note"
                            body="Do you want to delete all note?"
                            onClick={deleteAllNotes}
                            closeModal={closeModalDeleteAllNote}
                        />
                    )
                }

                <NoteCardWrapper>
                    {notesList.length > 0 ?
                        notesList.map((note: NotesListProps) => (
                            <NoteCard
                                key={note.note_id}
                                id={note.note_id}
                                colorNote={note.color_note}
                                titleNote={note.title_note}
                                observation={note.observation}
                                showModalDeleteThisNote={() => showModalDeleteThisNote(note.note_id)}
                                viewEditNote={() => showModalVieEditNote(note.note_id)}
                            />
                        )) : (
                            <NoNotes />
                        )}
                </NoteCardWrapper>
            </div>
        </Layout>
    );
}

export default Index;