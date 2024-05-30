import { useState } from 'react'

function TaskForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => (
        e.preventDefault();
        if (name.trim()) {
            addTask({ name, description});
            setName('');
            setDescription('');
        }
    );

  return (
    <form onSubmit={handleSybmit}>
        <input
        type="text"
        placeholder='Task Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder='Task Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm
