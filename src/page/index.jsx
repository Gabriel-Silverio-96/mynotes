import React, { useEffect, useState, useContext, useCallback } from "react";
import { ContextGlobal } from "../provider/context";

import { ThemeProvider } from "styled-components";
import light from "assets/styles/themes/light";
import dark from "assets/styles/themes/dark";
import GlobalStyles from "assets/styles/global";

//Components
import Header from "../components/Header/index";
import ModalMain from "../components/ModalMain";
import NoNotes from "components/NoNotes";
import NoteCard from "components/UI/NoteCard";
import ModalGeneric from "components/ModalGeneric";

//Util
import useThemeStorage from "util/useThemeStorage";
import dateNote from "util/dateNote";

import { NoteCardWrapper } from "./styled";

const Index = () => {
  const [theme, setTheme] = useThemeStorage("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme])

  const [idNote, setIdNote] = useState("");
  const [isNewNote, setIsNewNote] = useState(false);

  const [noteEditData, setNoteEditData] = useState({})

  //Context 
  const {
    modalState,
    setModalState,
    modalDeleteThisNote,
    setModalDeleteThisNote,
    modalDeleteAllNote,
    setModalDeleteAllNote,
    modalViewEditNote,
    setModalViewEditNote
  } = useContext(ContextGlobal);

  const newNoteInitialState = {
    id: "",
    colorNote: "#9C10FF",
    titleNote: "",
    observation: "",
    date: dateNote,
  }

  const [newNote, setNewNote] = useState(newNoteInitialState);

  const storage = JSON.parse(localStorage.getItem("notes"));
  const [noteStorage, setNoteStorage] = useState(storage);

  const handleChange = (e) => {
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

  //Submit
  function saveNote(e) {
    e.preventDefault();

    if (!modalViewEditNote) {
      setIsNewNote(!isNewNote);

      const storage = JSON.parse(localStorage.getItem("notes"));
      if (storage !== null) {
        localStorage.setItem("notes", JSON.stringify([...storage, newNote]))
      } else {
        localStorage.setItem("notes", JSON.stringify([newNote]))
      }

      e.target.reset();
      setModalState(!modalState);
      setNewNote(newNoteInitialState);

    } else {
      noteStorage.filter((note, index) => {        
        if (note.id === idNote) {
          const storageGet = JSON.parse(localStorage.getItem("notes"));
          storageGet.splice(index, 1, noteEditData)

          localStorage.setItem("notes", JSON.stringify(storageGet));
          setIsNewNote(!isNewNote);
          setModalState(!modalState);
        }

        return true
      })
    }
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("notes"));
    return setNoteStorage(storage)
  }, [isNewNote]);

  const showModalDeleteThisNote = (idNote) => {
    setModalDeleteThisNote(prevState => !prevState);
    setIdNote(idNote);
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
    setNoteStorage(null);
    setModalDeleteAllNote(!modalDeleteAllNote)
  }

  const deleteThisNote = () => {
    noteStorage.filter((value, index) => {
      if (value.id === Number(idNote)) {
        storage.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify([...storage]));

        setNoteStorage(storage);
        setModalDeleteThisNote(!modalDeleteThisNote);
      }


      if (storage.length === 0 && index === 0) {
        deleteAllNotes();
      }

      return true
    })
  }

  const showModalVieEditNote = (id) => {
    setModalViewEditNote(true);
    setModalState((prevState) => !prevState);

    noteStorage.filter((note, index) => {
      if (note.id === id) {
        setNoteEditData(note)
        setIdNote(note.id);
      }

      return true
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Header
          toggleTheme={toggleTheme}
          themeTitle={theme.title}
          thereAreNotes={noteStorage === null || noteStorage.length === 0 ? false : true}
          showModalDeleteAllNote={showModalDeleteAllNote}
        />

        {modalState && <ModalMain onSubmit={saveNote} onChange={handleChange} noteEditData={noteEditData} deleteNote={() => showModalDeleteThisNote(idNote)} />}

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
          {noteStorage !== null ?
            noteStorage.map((value, index) => (
              <NoteCard
                key={index}
                id={value.id}
                colorNote={value.colorNote}
                titleNote={value.titleNote}
                observation={value.observation}
                showModalDeleteThisNote={() => showModalDeleteThisNote(value.id)}
                viewEditNote={() => showModalVieEditNote(value.id)}
              />
            )) : (
              <NoNotes />
            )}
        </NoteCardWrapper>
      </div>
    </ThemeProvider>
  );
}

export default Index;