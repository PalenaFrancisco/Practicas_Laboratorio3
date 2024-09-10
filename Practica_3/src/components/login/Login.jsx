import { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [letterDetected, setLetterDetected] = useState(false);

    const handleChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        if (newName.includes("o") || newName.includes("O")) {
            setLetterDetected(true);
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        } else {
            setLetterDetected(false);
        }
    };

    const buttonAction = () => {
        if (name.length === 0 || name.includes("o") || name.includes("O")) {
            alert("Usuario inválido para registrarse");
        } else {
            alert("¡Usuario registrado correctamente!");
        }
    };

    const estiloP = { color: letterDetected ? "red" : "white" };
    const estiloButton = {
        background: letterDetected ? "red" : "#1a1a1a",
        cursor: letterDetected ? "not-allowed" : "pointer",
    };

    return (
        <>
            <input type="text" onChange={handleChange} placeholder="Name" />
            <p style={estiloP}>{name}</p>
            <button style={estiloButton} onClick={buttonAction}>
                Registrar usuario
            </button>
        </>
    );
};

export default Login;
