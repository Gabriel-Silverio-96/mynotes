import React from 'react';
import PropTypes from 'prop-types';

import "./style.css";

export default function ButtonPrimary({name, onClick, className}) {   
    return (
        <button className={`btn btn-primary ${className}`} onClick={onClick}>{name}</button>
    )
}

ButtonPrimary.propTypes = {
    name: PropTypes.string.isRequired
}