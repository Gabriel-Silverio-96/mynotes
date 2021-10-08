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

import { NoteCardWrapper } from "./styled";
import { NotesListProps, RequestProps } from "./types";
import { ContextGlobalProps } from "provider/types";
import Layout from "components/Layout";
import apiMyNotes from "service/apiMyNotes";
import { AxiosError } from "axios";
import { useHistory } from "react-router";

const Index: React.FC = () => {
    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    const [notesList, setNoteList] = useState([] as NotesListProps[]);
    const history = useHistory();

    useEffect(() => {
        const request = async () => {
            try {
                const { status, data } = await apiMyNotes.get("notes/list") as RequestProps;
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

    const [idNote, setIdNote] = useState<string>("");
    const [isNewNote, setIsNewNote] = useState<boolean>(false);
    const [noteEditData, setNoteEditData] = useState({} as NotesListProps)

    const newNoteInitialState = {
        color_note: "#9C10FF",
        title_note: "",
        observation: "",
    }

    const [newNote, setNewNote] = useState<NotesListProps>(newNoteInitialState);
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

    const saveNote = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }

    const showModalDeleteThisNote = (idNote: string) => {
        setModalDeleteThisNote(!modalDeleteAllNote);
        setIdNote(idNote);
        setModalState(false);
    }

    const showModalDeleteAllNote = () => {
    }

    const closeModalDeleteThisNote = () => {
    }

    const closeModalDeleteAllNote = () => {
    }

    const deleteAllNotes = () => {
      
    }

    const deleteThisNote = () => {

    }

    const showModalVieEditNote = (noteId: string) => {
        setModalViewEditNote(true);
        setModalState(true);

        const filterNote = notesList.filter((note: NotesListProps) => {
            if (note.note_id === noteId) {
                setNoteEditData(note);
            }

            return true;
        })
    }

    return (
        <Layout themeStyle={theme}>
            <div className="container">
                <Header
                    toggleTheme={toggleTheme}
                    themeTitle={theme.title}
                    thereAreNotes={notesList.length === 0 ? false : true}
                    showModalDeleteAllNote={showModalDeleteAllNote}
                />

                {
                    modalState && (
                        <ModalMain
                            onSubmit={saveNote}
                            onChange={handleChange}
                            noteEditData={noteEditData}
                            deleteNote={() => showModalDeleteThisNote(idNote)}
                            titleNoteErro={""}
                        />
                    )
                }

                {/* {
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
                } */}

                <NoteCardWrapper>
                    {notesList.length > 0 ?
                        notesList.map((note: NotesListProps) => (
                            <NoteCard
                                key={note.note_id}
                                id={note.note_id}
                                colorNote={note.color_note}
                                titleNote={note.title_note}
                                observation={note.observation}
                                showModalDeleteThisNote={() => showModalDeleteThisNote(note.note_id!)}
                                viewEditNote={() => showModalVieEditNote(note.note_id!)}
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