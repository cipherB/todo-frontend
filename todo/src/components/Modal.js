import React, { useState } from 'react';
import {API} from '../backend';
import axios from 'axios';

const Modal = ({ open, onClose }) => {

    const [formData, setFormData] = useState({
        texts: "",
        category: "uncategorized",
        schedule: null
    });

    const { texts, category, schedule } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});


    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }
        axios.post(`${API}${localStorage.getItem('username')}/create/`, {
            "texts": texts,
            "category": category,
            "schedule": schedule
        }, config)
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
    };

    const Submit = (e) => {
        onSubmit(e);
        onClose();
    }

    if (!open) return null;



    return (
        <div className="open">
            <div className="create" >
                <h1 className='create_title' >Add to list</h1>
                <form className="create_form" onSubmit={Submit} >
                    <div className="create_form_group">
                        <textarea 
                            className='create_form_text' 
                            type='text' 
                            placeholder='type texts here' 
                            name='texts' 
                            value={texts} 
                            onChange={e => onChange(e)} 
                            required 
                        />
                    </div>
                    <div className="create_form_group">
                        <select className="create_form_input" name='category' value={category} onChange={e => onChange(e)} >
                            <option value="uncategorized">Uncategorized</option>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="family affair">Family</option>
                            <option value="study">Study</option>
                        </select>
                    </div>
                    <div className="create_form_group">
                        <label className="create_form_label" for="schedule">Schedule: </label>
                        <input 
                            className='create_form_input' 
                            type='datetime-local' 
                            placeholder='' 
                            name='schedule' 
                            value={schedule} 
                            onChange={e => onChange(e)} 
                        />
                    </div>
                    <button className='create_form_button' >Save</button>
                </form>
                <div className="close" >
                    <button onClick={onClose}><i class="fa fa-times"></i></button>
                </div>
            </div>
        </div>
    )
};

export default Modal;
