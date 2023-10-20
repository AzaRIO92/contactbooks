import React from 'react'
import './ContactList.css'

const ContactList = (props) => {
    console.log(props);
  return (
    <div className='contact_list'>
        <ul>
            {props.todos.map((item) => (
            <li className={`task ${item.status ? 'completed' : ''}`} key={item.id}>
                <h2>Contact List</h2>
                <p>{item.task}</p>
                {item.task2 && <img src={item.task2} alt="error" style={{ width: '300px', height: '200px' }} />}
                <p>{item.task3}</p>
                <button onClick={() => props.handleDelete(item.id)}>delete</button>
                <button onClick={() => props.handleEdit(item)}>edit</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ContactList