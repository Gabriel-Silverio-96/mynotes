import React from 'react';

//components
import Header from '../components/Header';
import Title from '../components/UI/Title/index';
import ButtonPrimary from '../components/UI/Button';
import Notes from '../components/UI/Notes';

//style
import '../assets/css/global.css';

function Index() {
  return (
    <div className="container"> 
      <Header />

      <div className="title-area">
        <Title text="Notas rápidas" />
        <ButtonPrimary name="Nova nota" className="btn-margin" onClick={() =>  console.log(">>>>>TOP")}  />
      </div>

      
        <Notes />
      
    </div>
  );
}

export default Index;