import React, { useState } from 'react'
import TaskForm from './TaskForm'
import  TaskList from './TaskList'

function TastkManager() {
    
    const [tasks, setTasks] = useState([]);
    const addTask = (task) =>(
        setTasks([...tasks, taks])
    )                                        

    return (
        <div>
            <h1>task manager</h1>
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks}/>
        </div>
  )
}

export default TastkManager

