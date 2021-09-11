import React, { useEffect, useState, useContext, useCallback } from "react";
import { ContextGlobal } from "../provider/context";

import { ThemeProvider } from "styled-components";
import light from "assets/styles/themes/light";
import dark from "assets/styles/themes/dark";
import GlobalStyles from "assets/styles/global";

//Components
import Header from "../components/Header/index";
import ModalMain from "../components/Modal";
import NoNotes from "components/NoNotes";
import NoteCard from "components/UI/NoteCard";

//Util
import useThemeStorage from "util/useThemeStorage";
import dateNote from "util/dateNote";

import { NoteCardWrapper } from "./styled";

const Index = () => {
  const [theme, setTheme] = useThemeStorage("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme])

  //Context 
  const { modalState } = useContext(ContextGlobal);

  const [newNote, setNewNote] = useState(
    {
      id: "",
      colorNote: "#9C10FF",
      titleNote: "",
      observation: "",
      date: dateNote,
    },
  );

  const storage = JSON.parse(localStorage.getItem("notes"));
  const [noteStorage, SetNoteStorage] = useState(storage);

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      id: Math.floor(Math.random() * 1000),
      [e.target.name]: e.target.value
    })
  }

  //Submit
  function SaveNote(e) {
    e.preventDefault();

    setNewNote({
      ...newNote
    })

    const storage = JSON.parse(localStorage.getItem("notes"));
    if (storage !== null) {
      localStorage.setItem("notes", JSON.stringify([...storage, newNote]))
    } else {
      localStorage.setItem("notes", JSON.stringify([newNote]))
    }

    e.target.reset();
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("notes"));
    return SetNoteStorage(storage)
  }, [newNote]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">

        <Header
          toggleTheme={toggleTheme}
          themeTitle={theme.title}
        />

        {modalState && <ModalMain onSubmit={SaveNote} onChange={handleChange} />}

        <NoteCardWrapper>
          {noteStorage !== null ?
            noteStorage.map((value, index) => (              
              <NoteCard
                key={index}
                id={value.id}
                colorNote={value.colorNote}
                titleNote={value.titleNote}
                observation={value.observation}
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