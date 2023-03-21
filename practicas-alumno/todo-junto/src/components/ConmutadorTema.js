import React, { useContext } from "react";
import { TEMAS } from "../constants/temas";
import Tema from "../contexts/Tema";

const ConmutadorTema = () => {
    const tema = useContext(Tema);
    const cambiarTema = () => {
        tema.cambiarTema(tema.valor === TEMAS.claro ? TEMAS.oscuro : TEMAS.claro)
    }
    
    return <>
        <button onClick={cambiarTema}>Cambiar tema (a la pagina completa)</button>
        <h4>Tema aplicado: {tema.valor}</h4>
    </>
}
export default ConmutadorTema;