import React from 'react';
import PropTypes from "prop-types";

//style
import './style.css';

export default function Notes(props) {
    return (
        <div className="notes" onDoubleClick={props.onDoubleClick}>
            <div className="notes-box"                                
                id={props.id}
                style={{ 
                    backgroundColor: props.colornote 
                }}
            >
                {/* Conteúdo modal */}
                <h2>{props.title}</h2>
                <p>Criado em {props.date}</p>
            </div>
            <p className="message-delete-note">Duplo clique para deletar a nota</p>
        </div>
    )
}

Notes.prototype = {
    onDoubleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    colornote: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}