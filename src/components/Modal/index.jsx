import React from 'react';
import PropTypes from 'prop-types';

//style
import './style.css';

export default function Modal(props) {
    return (
        <div className={`modal ${props.classCss}`}>
            <div className="modal-header">
                <h1>{props.title}</h1>
                <button className="btn-modal-header" onClick={props.CloseModal}>X</button>
            </div>
            <form onSubmit={props.onSubmit}>
                <div className="modal-body">
                    {props.modalBody.map((value, index) => {
                        return (
                            <div key={index}>
                                {value}
                            </div>
                        )
                    })}
                </div>
                <div className="modal-footer">
                    {props.modalFooter.map((value, index) => {
                        return (
                            <div key={index}>
                                {value}
                            </div>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    modalBody: PropTypes.array.isRequired,
    modalFooter: PropTypes.array.isRequired
}