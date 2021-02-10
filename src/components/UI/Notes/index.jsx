import React from 'react';

//style
import './style.css';

export default function Notes(props) {
    return (
        <>
            <div className="notes-box" id={props.id} style={{backgroundColor: props.colornote}}>
                <h2>{props.title}</h2>

                <p>Criado em {props.date}</p>
            </div>
        </>
    )
}