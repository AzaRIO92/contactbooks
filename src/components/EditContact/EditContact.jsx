import React, { useState } from 'react';
import './EditContact.css'

const EditContact = (props) => {
    const [editTodo, setEditTodo] = useState(props.taskToEdit);

    const handleInputChange = (key, value) => {
        setEditTodo({
            ...editTodo,
            [key]: value,
        });
    };

    return (
        <div className='main-modal'>
            <div className='inner-modal'>
                <div className="close">
                    <button onClick={props.handleClose}>&times;</button>
                </div>
                <input
                    value={editTodo.task}
                    onChange={(e) => handleInputChange('task', e.target.value)}
                    type="text"
                    className='inp-edit'
                />
                <input
                    value={editTodo.task2}
                    onChange={(e) => handleInputChange('task2', e.target.value)}
                    type="text"
                    className='inp-edit'
                />
                <input
                    value={editTodo.task3}
                    onChange={(e) => handleInputChange('task3', e.target.value)}
                    type="text"
                    className='inp-edit'
                />
                <button onClick={() => props.saveChanges(editTodo)}>change</button>
            </div>
        </div>
    );
};

export default EditContact;
