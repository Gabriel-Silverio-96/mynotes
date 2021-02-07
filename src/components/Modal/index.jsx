import React from 'react';
import PropTypes from 'prop-types';

//style
import './style.css';

export default function Modal(props) {
    return (
        <div className="modal">
            <div className="modal-header">
                <h1>{props.title}</h1>
            </div>
            <form>
                <div className="modal-body">
                    {props.modalBody.map(value => {
                        return (
                            <div key={value.length}>
                                {value}
                            </div>
                        )
                    })}
                </div>
                <div className="modal-footer">
                    {props.modalFooter.map(value => {
                        return (
                            <div key={value.length}>
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