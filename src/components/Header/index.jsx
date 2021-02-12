import React from 'react';
import PropTypes from 'prop-types';

//assets
import Logo from '../../assets/logo-mynotes.svg';
import "../../assets/css/header.css";

export default function Header(props) {
    return(
        <header {...props}>
            <img className="logo" src={Logo} alt="Logo MyNotes" />
        </header>
    )
}

Header.protoType = {
    props:PropTypes.object.isRequired 
}