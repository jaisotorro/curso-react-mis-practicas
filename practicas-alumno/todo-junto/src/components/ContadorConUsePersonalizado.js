import { useContext, useEffect, useMemo, useRef, useState } from "react";
import random, { randomArray } from "../utils/random";
import useContador from "../hooks/useContador";
import Tema2 from "../contexts/TemaRepe";


const ContadorConUsePersonalizado = () => {
    const EMOJI_LIST = ["😃", "😊", "👻", "👾", "🐱", "🐶", "😇", "🤖"]
    // const emojiRandomArray = randomArray(EMOJI_LIST,5);  // asi, cada vez que se incrementa el contador, se renderiza todo el componente y se re-ejecuta esta funcion
    const emojisRandomArrayMemorizada = useMemo(() => randomArray(EMOJI_LIST,5),[]); // asi, guardandolo en memoria mediante el useMemo (y poniendo vacias sus dependencias), solo se ejecuta una sola vez al montarse el componente
    const [emoji, setEmoji] = useState(random(emojisRandomArrayMemorizada));
    const miContador = useContador();
    const [nombreContador, setNombreContador] = useState("");
    const refNombreCampo = useRef(null);
     

    // pte comparar codigo con el ejemplo 2.7

    // pte btns incrementar y decrementar en 1
    // pte btns incrementar y decrementar en un numero editable
    // pte poner hints en cada elemento visible explicando como está hecho y lo que se usa. Y un comentario avisando de estos hints

    // pte KO que la seccion aparezca en rojo al entrar
    // pte KO Que los botones de cambio de tema aparezcan en otra linea

    const cambiarEmoji = (e) => {
        const {value} = e.target
        if (value != "none"){
            setEmoji(value)
        }
    }
    const cambiarNombreContador = (e) => {
        const {value} = e.target;
        setNombreContador(value);
    }

    useEffect(() => {
        if (refNombreCampo.current != null)
        refNombreCampo.current.focus();
    },[])



    return (<>
        <p>Nombre del contador</p>    
        <input type="text" name={nombreContador} onChange={cambiarNombreContador} ref={refNombreCampo} placeholder="Introduce un nombre" />
        <select onChange={cambiarEmoji}>
            <option value="none">Selecciona otro Emoji</option>
            {emojisRandomArrayMemorizada.map((em, key) => (
                <option value={em} key={key}>{em}</option>
                ))}
        </select>
        <button onClick={miContador.avanzar}>Empezar</button>{" "}<button onClick={miContador.detener}>Parar</button>{" "}<button onClick={miContador.resetear}>Resetear</button>
        <div>
            <h4>{nombreContador}</h4>
            {emoji.repeat(miContador.valor)}
        </div>
    </>);

}
export default ContadorConUsePersonalizado;