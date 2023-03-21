import { useContext, useRef } from "react";
import { TEMAS } from "../constants/temas";
import TemaRepe from "../contexts/TemaRepe";
import { TEMAS_DIV } from "../constants/temas_div";
import TemaDiv from "../contexts/TemaDiv";

const ConmutadoresTema = () => {
    const tema = useContext(TemaRepe);
    const temaDiv = useContext(TemaDiv);
    const refBotonTema = useRef(null);
    const refBotontemaDiv = useRef(null);
    const oscurecerTema = () => {
        tema.updateValor(TEMAS.oscuro)
    }
    const clarearTema = () => {
        tema.updateValor(TEMAS.claro)
    }
    const cambiarTema = () => {
        tema.updateValor(tema.valor == TEMAS.claro ? TEMAS.oscuro : TEMAS.claro);
        if (refBotonTema.current){
            refBotonTema.current.innerHTML = tema.valor == TEMAS.claro ? "Clarear página" : "Oscurecer página";
        }
    }
    const cambiarTemaDiv = () => {
        temaDiv.updateValor(temaDiv.valor == TEMAS_DIV.rojo ? TEMAS_DIV.verde : TEMAS_DIV.rojo);
        if (refBotontemaDiv.current){
            refBotontemaDiv.current.innerHTML = temaDiv.valor == TEMAS_DIV.rojo ? "Cambiar sección a rojo" : "Cambiar sección a verde";
        }
    }

    return (<div>
        <h4>Distintas opciones para cambiar el tema</h4>
        {/* <button onClick={oscurecerTema}>Oscurecer pagina</button>{" "}<button  onClick={clarearTema}>Clarear pagina</button>{" "} */}
        <button ref={refBotonTema} onClick={cambiarTema}>Oscurecer página</button>{" "}<button ref={refBotontemaDiv} onClick={cambiarTemaDiv}>Cambiar sección a rojo</button>
    </div>)
}
export default ConmutadoresTema;