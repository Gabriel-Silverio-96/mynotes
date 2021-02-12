import React from 'react';
import PropTypes from 'prop-types';

//style
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

function Delete({name, className, onClick}) {   
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
    type: PropTypes.string,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
}

Delete.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}