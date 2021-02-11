import React, { useEffect, useState, useContext } from 'react';
import { ContextGlobal } from '../provider/context';

//components
import Header from '../components/Header';
import Title from '../components/UI/Title/index';
import { ButtonPrimary, Delete} from '../components/UI/Button';
import Notes from '../components/UI/Notes';
import Modal from '../components/Modal';

//style
import '../assets/css/global.css';

function Index() {
  const {modalState, SetModalState} = useContext(ContextGlobal);
  
  const date = new Date()
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateNote = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`

  const [newNote, SetNewNote] = useState(
    {
      id: '',
      colornote: '',
      title: '',
      date: dateNote,
    },
  );

  function handleChange(e) {
    SetNewNote({ ...newNote, 
      id: Math.floor(Math.random() * 1000),
      [e.target.name]: e.target.value 
    })
  }

  function SaveNote(e) {
    e.preventDefault()
    
    SetNewNote({
      ...newNote
    })

    const noteStorage = JSON.parse(localStorage.getItem('notes'));
    if (noteStorage !== null) {
      localStorage.setItem('notes', JSON.stringify([...noteStorage, newNote]))
    } else {
      localStorage.setItem('notes', JSON.stringify([newNote]))
    }

    CloseModal()       
    e.target.reset()
  }

  const storage = JSON.parse(localStorage.getItem('notes'));
  const [noteStorage, SetNoteStorage] = useState(storage)

  useEffect(() => {    
    return SetNoteStorage(storage)
  }, [newNote]);
  
  function deleteNotes() {
    localStorage.removeItem("notes");
    SetNoteStorage(null);
  }

  function ShowModal() {
    SetModalState("modal-show")
  }

  function CloseModal() {
    SetModalState("modal-none")
  }

  function DeleteThisNote(e) {
      
      storage.filter((value, index) => {         
        if(value.id === Number(e.target.id)) {
          console.log(e.target);
        }
      })
  }

  return (      
    <div className="container">
      <Header />

      <div className="title-area">
        <Title text="Notas rápidas" />
        <div>
          {noteStorage !== null ? (
            <Delete name="Deletar todas as notas" className="btn-margin" onClick={deleteNotes} />
          ) : ("")}
          <ButtonPrimary name="Nova nota" className="btn-margin" onClick={ShowModal} />
        </div>
      </div>

      <div className="notes-area">
        {noteStorage !== null ?
          noteStorage.map((value, index) => (
            <Notes
              onClick={DeleteThisNote}
              key={index}
              id={value.id}
              colornote={value.colornote}
              title={value.title}
              date={value.date}
            />
          )) : (
            <p>Você não tem nenhuma nota</p>
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
                <input type="radio" id="color1" name="colornote" value="#FF51B5" onChange={handleChange} />
                <label htmlFor="color1"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color2" name="colornote" value="#FFAA4E" onChange={handleChange} />
                <label htmlFor="color2"></label>
              </div>
              <div className="color-radio">
                <input type="radio" id="color3" name="colornote" value="#4EDCFB" onChange={handleChange} />
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
          <input type="text" name="title" onChange={handleChange} placeholder="Título da nota" />,           
        ]}
        modalFooter={[
          <ButtonPrimary name="Salvar" className="btn-width" />,
        ]}
      />

    </div>
  );
}

export default Index;