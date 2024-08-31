import { useState } from "react"

const Login = () => {
    const [name, setName] = useState("");
    const [letterDetected, setletterDetected] = useState(false)

    const handleChange = (e) =>{
        
        setName(e.target.value)

        if(name.length >= 0 && (name.includes("o") || name.includes("O"))){
            setletterDetected(true)
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }else{
            setletterDetected(false)
        }
    }

    const buttonAction = () =>{
        if (name.length == 0 || name.includes("o") || name.includes("O")){
            alert("Usuario inválido para registrarse")
        }else{
            alert("¡Usuario registrado correctamente!")
        }
    }

    const estiloP = {color: letterDetected ? "red" : "white"}
    const estiloButton = {
        background: letterDetected ? "red" : "#1a1a1a",
        cursor: letterDetected ? "not-allowed" : "pointer"
    }

    return(
        <>
            <input type="text" onChange={handleChange} placeholder="Name"/>
            <p style={estiloP}>{name}</p>
            <button style={estiloButton} onClick={buttonAction}>Registrar usuario</button>
        </>
    );
}


export default Login