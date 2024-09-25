import { useState } from "react";

const Task = ({ task, onDelete, taskId }) => {
    const [finished, setFinished] = useState(false);

    const crossed = { textDecoration: finished ? "line-through" : "none" };

    const handleCheckboxChange = () => {
        setFinished(!finished);
    };

    return (
        <li style={{ display: "flex", gap: "10px", justifyContent: "center", listStyle: "circle" }}>
            <p style={crossed}>{task.name}</p>
            <input type="checkbox" checked={finished} onChange={handleCheckboxChange} />
            <button onClick={() => onDelete(taskId)}>Eliminar</button>
        </li>
    );
};

export default Task;
