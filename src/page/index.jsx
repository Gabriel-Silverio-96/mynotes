import React, { useEffect, useState, useContext } from 'react';
import { ContextGlobal } from '../provider/context';

//components
import Header from '../components/Header/index';
import Title from '../components/UI/Title/index';
import { ButtonPrimary, Delete } from '../components/UI/Button';
import Notes from '../components/UI/Notes';
import Modal from '../components/Modal';

//assets
import '../assets/css/global.css';
import '../assets/css/responsive.css';
import ImageNote from '../assets/image/notes.png';

function Index() {
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
      colornote: '#FF51B5',
      title: '',
      date: dateNote,
    },
  );

  const storage = JSON.parse(localStorage.getItem('notes'));
  const [noteStorage, SetNoteStorage] = useState(storage);
  const [erroMessage, SetErroMessage] = useState({
    inputRequiredTitle: ""
  });

  //Set State newNote
  function handleChange(e) {
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

      CloseModal();

      SetNewNote({
        id: '',
        colornote: '#FF51B5',
        title: '',
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

  function ShowModal() {
    SetModalState("modal-show");
    SetBlur("blur");
  }

  function CloseModal() {
    SetModalState("modal-none");
    SetBlur("");
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
    <div className="container">
      <Header className={blur} />

      <div className={`title-area ${blur}`}>
        <Title text="Notas rápidas" />
        <div className="btn-action">
          {noteStorage !== null ? (
            <Delete name="Deletar todas as notas" className="btn-margin" onClick={deleteAllNotes} />
          ) : ("")}
          <ButtonPrimary name="Nova nota" className="btn-margin" onClick={ShowModal} />
        </div>
      </div>

      <div className={`notes-area ${blur}`}>
        {noteStorage !== null ?
          noteStorage.map((value, index) => (
            <Notes
              onDoubleClick={DeleteThisNote}
              key={index}
              id={value.id}
              colornote={value.colornote}
              title={value.title}
              date={value.date}
            />
          )) : (
            <div className="no-note">
              <img src={ImageNote} alt="Imagem de aviso sem notas" />
              <h1>Você não tem nenhuma nota</h1>
              <p>Crie uma nova nota =)</p>
            </div>
          )}
      </div>

      <Modal
        title="Adicionar nota"
        classCss={modalState}
        CloseModal={CloseModal}
        onSubmit={SaveNote}
        modalBody={[
          <div className="radio">
            <label>Selecione uma cor</label>
            <div className="radio-area">
              <div className="color-radio">
                <input type="radio" id="color1" name="colornote" value="#FF51B5" onChange={handleChange} defaultChecked />
                <label htmlFor="color1"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color2" name="colornote" value="#FFAA4E" onChange={handleChange} />
                <label htmlFor="color2"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color3" name="colornote" value="#36BDDA" onChange={handleChange} />
                <label htmlFor="color3"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color4" name="colornote" value="#0DFF7E" onChange={handleChange} />
                <label htmlFor="color4"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color5" name="colornote" value="#FF0D5F" onChange={handleChange} />
                <label htmlFor="color5"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color6" name="colornote" value="#9C10FF" onChange={handleChange} />
                <label htmlFor="color6"></label>
              </div>
            </div>
          </div>,
          <input type="text" name="title" onChange={handleChange} placeholder="Título da nota" maxLength="65" />,
          <span className="erro-message">{erroMessage.inputRequiredTitle}</span>,
        ]}
        modalFooter={[
          <ButtonPrimary name="Salvar" className="btn-width" />,
        ]}
      />
    </div>
  );
}

export default Index;