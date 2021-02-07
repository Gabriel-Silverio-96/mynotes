import React, { useState } from 'react';

//components
import Header from '../components/Header';
import Title from '../components/UI/Title/index';
import ButtonPrimary from '../components/UI/Button';
import Notes from '../components/UI/Notes';
import Modal from '../components/Modal';

//style
import '../assets/css/global.css';

function Index() {
  const [newNote, SetNewNote] = useState([
    { id: 1, title: "Organizar conteúdos", date: "01/02/2020" },
    { id: 2, title: "Criar requisição para o projeto", date: "12/12/2020" }
  ]);


  function AddNote() {
    SetNewNote([...newNote, { id: 3, title: "Melhorias no componenete de texto", date: "01/01/2001" }])
  }

  return (
    <div className="container">
      <Header />

      <div className="title-area">
        <Title text="Notas rápidas" />
        <ButtonPrimary name="Nova nota" className="btn-margin" onClick={AddNote} />
      </div>

      <div className="notes-area">
        {newNote.map(value => (
          <Notes key={value.id} title={value.title} date={value.date} />
        ))}
      </div>

      <Modal 
        title="Adicionar nota"
        modalBody={[
          <input type="text" placeholder="Título da nota" />,                    
        ]}
        modalFooter={[
          <ButtonPrimary name="Salvar" className="btn-width" />,          
        ]}
      />
      
    </div>
  );
}

export default Index;