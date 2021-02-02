import React from 'react';
import PropTypes from 'prop-types';

//style
import './style.css';

export default function Title(props) {
    return (
        <h1 className="title-main">{props.text}</h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}