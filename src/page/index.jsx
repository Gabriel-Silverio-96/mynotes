import React, { useEffect, useState, useContext, useCallback } from 'react';
import { ContextGlobal } from '../provider/context';

//Components
import Header from '../components/Header/index';
import { ButtonPrimary, Delete } from '../components/UI/Button';
import Notes from '../components/UI/Notes';
import ModalMain from '../components/Modal';
import NoNotes from 'components/NoNotes';

import { ThemeProvider } from 'styled-components';
import light from 'assets/styles/themes/light';
import dark from 'assets/styles/themes/dark';
import GlobalStyles from "assets/styles/global";

import useThemeStorage from 'util/useThemeStorage';

function Index() {
  const [theme, setTheme] = useThemeStorage("theme", light);
  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme])

  //Context 
  const {
    modalState,
    SetModalState,
    blur,
    SetBlur
  } = useContext(ContextGlobal);

  const date = new Date()
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateNote = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;

  const [newNote, SetNewNote] = useState(
    {
      id: '',
      colorNote: '#9C10FF',
      titleNote: '',
      observation: "",
      date: dateNote,
    },
  );

  const storage = JSON.parse(localStorage.getItem('notes'));
  const [noteStorage, SetNoteStorage] = useState(storage);
  const [erroMessage, SetErroMessage] = useState({
    inputRequiredTitle: ""
  });

  const handleChange = (e) => {
    console.log(e.target);
    SetNewNote({
      ...newNote,
      id: Math.floor(Math.random() * 1000),
      [e.target.name]: e.target.value
    })
  }

  //Submit
  function SaveNote(e) {
    e.preventDefault();
    if (newNote.title === "" || newNote.length < 3) {
      SetErroMessage({
        ...erroMessage,
        inputRequiredTitle: "Adicione um título com no mínimo 3 caracteres"
      })
    } else {
      SetNewNote({
        ...newNote
      })

      //reset mensagem erro
      SetErroMessage({})

      const storage = JSON.parse(localStorage.getItem('notes'));
      if (storage !== null) {
        localStorage.setItem('notes', JSON.stringify([...storage, newNote]))
      } else {
        //Set o primeiro storage do usuário
        localStorage.setItem('notes', JSON.stringify([newNote]))
      }

      SetNewNote({
        id: '',
        colorNote: '#FF51B5',
        title: '',
        observation: "",
        date: dateNote,
      })

      //esvazia os campos do formulário
      e.target.reset();
    }
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('notes'));
    return SetNoteStorage(storage)
  }, [newNote]);

  //Interações do usuário  
  function deleteAllNotes() {
    localStorage.removeItem("notes");
    SetNoteStorage(null);
  }

  function DeleteThisNote(e) {
    noteStorage.filter((value, index) => {
      if (value.id === Number(e.target.id)) {
        storage.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify([...storage]));

        SetNoteStorage(storage);
      }

      if (storage.length === 0 && index === 0) {
        //remove o item notes do storage
        deleteAllNotes();
      }

      return true
    })
  }

  return (
    console.log(newNote),
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">

        <Header
          toggleTheme={toggleTheme}
          themeTitle={theme.title}
        />

        {modalState && <ModalMain onSubmit={SaveNote} onChange={handleChange} />}

        <div>
          {noteStorage !== null ?
            noteStorage.map((value, index) => (
              <div key={index}>
                <p>{value.titleNote}</p>
                <p>{value.observation}</p>
              </div>
            )) : (
              <NoNotes />
            )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Index;