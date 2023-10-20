import React from 'react'
import { useState } from 'react';
import AddContact from './components/AddContact/AddContact'
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';

const App = () => {
  const [todos, setTodos] = useState ([]);
  const [modal, setModal] = useState (false);
  const [taskToEdit, setTaskToEdit] = useState (null);
  
  
  const handleTask = (newObj) => {
   
    const newTodos = [...todos];
    newTodos.push(newObj);
  
    setTodos(newTodos);
  }
  
  const changeStatus = (id) => {
    const newTodos = todos.map((item) => {
      if(item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  }


  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  };

  const handleEdit = (task) => {
    setModal(true)
    setTaskToEdit(task)
  };


  const handleClose = () => {
    setModal(false)
  };


  const saveChanges = (updatedTask) => {
    const newTodos = todos.map((item) => {
      if (item.id === updatedTask.id) {
        return updatedTask;
      } 
      return item;
    })  
    setTodos(newTodos)

    handleClose();
  }
  return (
    <div>
      <AddContact handleTask={handleTask}/>
      <ContactList 
        todos={todos} 
        changeStatus={changeStatus} 
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? <EditContact saveChanges={saveChanges} taskToEdit={taskToEdit} handleClose={handleClose}/> : null}
    </div>
  )
}

export default App