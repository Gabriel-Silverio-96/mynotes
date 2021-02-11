import React from 'react';
import PropTypes from 'prop-types';

import "./style.css";

function ButtonPrimary({name, onClick, className, type}) {   
    return (
        <button 
        type={type}
        className={`btn btn-primary ${className}`} 
        onClick={onClick}>
            {name}
        </button>
    )
}

function Delete({name, onClick, className}) {   
    return (
        <button 
        className={`btn btn-delete ${className}`} 
        onClick={onClick}>
            {name}
        </button>
    )
}

export {ButtonPrimary, Delete};

ButtonPrimary.propTypes = {
    name: PropTypes.string.isRequired
}