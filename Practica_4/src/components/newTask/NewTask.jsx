import { useState } from "react"

const NewTask = ({ handleNewTask }) =>{
    const [newTaskName, setNewTaskname] = useState("")

    const handleChangeInput = (e) => {
        setNewTaskname(e.target.value)
    }

    const handleAddTask = () => {
        handleNewTask(newTaskName)
        setNewTaskname("")
    }

    return(
        <div>
            <input type="text" value={newTaskName} onChange={handleChangeInput} placeholder="Nueva Tarea"/>
            <button onClick={handleAddTask} style={{marginLeft: "10px"}}>Crear Tarea</button>
        </div>
    );


}

export default NewTask