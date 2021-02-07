import React from 'react';

//style
import './style.css';

export default function Notes(props) {
    return (
        <>
            <div className="notes-box">
                <h2>{props.title}</h2>

                <p>Criado em {props.date}</p>
            </div>
        </>
    )
}