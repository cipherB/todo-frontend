import React from 'react';
import axios from 'axios';
import {API} from '../backend';

const ConfirmRemoval = ({ open, onClose, id }) => {

    const deleteTodo = e => {
        e.preventDefault();
        axios.delete(`${API}delete/${id}`).then(
            console.log('deleted')
        );
    };
    // const reset = () => {
    //     window.location.reload(false)
    // }

    const onClick = e => {
        deleteTodo(e);
        onClose();
    }

    if (!open) return null;

    return (
        <div className="open" >
            <div className="remove" >
                <h1>Are you sure you want to delete?</h1>
                <button className="btn" onClick={onClose} >
                    Cancel
                </button>
                <button className="btn btn-danger" onClick={e => onClick(e)} >
                    Yes
                </button>
            </div>
        </div>
    )
};

export default ConfirmRemoval;
