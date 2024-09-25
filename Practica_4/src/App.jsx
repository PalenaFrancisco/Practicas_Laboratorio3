import { useState } from 'react'
import './App.css'
import NewTask from "./components/newTask/NewTask"
import List from './components/list/List'

function App() {
  const [tasks, setTask] = useState([])

  const handleNewTask = (name) => {
    setTask([...tasks ,{name: name}])
  }

  const handleDeleteTask = (index) => {
    const task = tasks.filter((_ , i) => i !== index);
    setTask(task)
  }

  return (
    <>
      <h1>App de Tareas</h1>
      <br />
      <List tasks={tasks} Delete={handleDeleteTask}/>
      <NewTask handleNewTask = {handleNewTask}/>
    </>
  )
}

export default App
