import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import "./ToDoList.css"
const ToDoList = () => {
    const [ToDos, setToDos] = useState([])

    const addTask = (newToDo) => {
        setToDos(tasks => [...tasks, newToDo])
    }

    const removeTask = (id) => {
        setToDos(ToDos => ToDos.filter(task => task.id !== id))
    }

    const updateTask = (id, editedTask) => {

        let changedTask = (ToDos.filter(task => task.id === id))
        changedTask[0].task = editedTask

        setToDos(ToDos => [...ToDos])

    }

    return (
        <>
            <ToDoForm addTask={addTask} />
            <div className='ToDoContainer'>
                <div className='ToDoList'>
                    {ToDos.map(todo => <ToDoItem
                        task={todo.task}
                        id={todo.id}
                        todo={todo}
                        removeTask={removeTask}
                        updateTask={updateTask}
                        key={todo.id} />)}
                </div>
            </div>
        </>

    )
}

export default ToDoList;