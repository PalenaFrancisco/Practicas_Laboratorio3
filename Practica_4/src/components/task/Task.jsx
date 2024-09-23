import { useState } from "react";

const Task = ({ task }) => {
    const [finished, setFinished] = useState(false);

    var crossed = {textDecoration: finished ? "line-through" : "none"}

    const handleCheckboxChange = () => {
        setFinished(!finished);
    }

    return (
        <li style={{display: "flex", gap: "10px", justifyContent: "center", listStyle:"circle"}}>
            <p style={crossed}>{task.name}</p>
            <input type="checkbox" checked={finished} onChange={handleCheckboxChange}/>
        </li>
    );
};

export default Task