import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {API} from '../backend';
import Dashboard from '../components/Dashboard';
import Check from '../components/Check';

const Uncategorized = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {

        const config = {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        };
         
       
        axios.get(`${API}${localStorage.getItem('username')}/`, config)
        .then(res => {
            setTodo(res.data);
        })
        .catch(() => {

        });
    }, []);

    var count = 0;
    
    return (
        <div>
            <Dashboard />
            {
                (todo && todo.map((items, index) => {
                    return (
                        <div className="container" key={index} >
                            {
                                (items.category === "UN") ? 
                                (!items.archive && !items.completed) ? 
                                <div className="todo" >
                                        <div className="todo_item" >
                                            <p>{items.texts} </p>
                                            <p>scheduled at: {items.schedule} </p>
                                            <Check todo={items} />
                                        </div>
                                        {count += 1 }
                                    </div> : null :
                                null
                            }
                            
                        </div>
                    )
                }))
            }
            {(count === 0) ? (
                <h1>List is empty</h1>
            ) : null}
        </div>
    )
}

export default Uncategorized;
