import React from 'react'
import { useState } from 'react';
import './AddContact.css'

const AddContact = (props) => {
    const [task, setTask] = useState('');
    const [task2, setTask2] = useState('');
    const [task3, setTask3] = useState('');
    
    const handleAddTask = () => {
        if(!task.trim() || !task2.trim() || !task3.trim()){
            alert('введите данные');
            return;
        }
        const newTask = {
            task: task,
            task2: task2,
            task3: task3,
            status: false,
            id: Date.now(),
        };
         
        props.handleTask(newTask);
        setTask('')
        setTask2('')
        setTask3('')
    }
    const handleImageChange = (e) => {
        const inputValue = e.target.value;
        setTask2(inputValue);
    };
    return (
        <div className='contact_book'>
            <h2>Contact Book</h2>
            <input type="text" placeholder="введите имя" value={task} onChange={(e) => setTask(e.target.value)} />
            <input type="url" placeholder="введите ваше фото" value={task2} onChange={handleImageChange} />
            <input type="number" placeholder="введите ваш номер" value={task3} onChange={(e) => setTask3(e.target.value)} />
            <button onClick={handleAddTask}>Save</button>
        </div>
    )
}

export default AddContact