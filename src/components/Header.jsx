import React from 'react';

//assets
import Logo from '../assets/logo-mynotes.svg';
import "../assets/css/header.css";

export default function Header(props) {
    return(
        <header {...props}>
            <img className="logo" src={Logo} alt="Logo MyNotes" />
        </header>
    )
}