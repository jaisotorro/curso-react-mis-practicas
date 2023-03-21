import { useState } from "react";
import expensiveRandom from "../utils/expensiveRandom";
import random from "../utils/random";

const ContadorConEmojis = () => {
    // List de emojis
    const EMOJI_LIST = [
    "😃", "😊", "👻", "👾", "🐱", "🐶"
    ]
    const [contador, setContador] = useState(0);
    //const [emoji, setEmoji] = useState(expensiveRandom(EMOJI_LIST)); // poco optimo porque se llama a expensiveRandom cada vez que se renderiza el componente
    //const [emoji, setEmoji] = useState(() => expensiveRandom(EMOJI_LIST)); // más optimo porque solo se llama a expensiveRandom la primera vez, al monstarse el componente
    const [emoji, setEmoji] = useState(() => random(EMOJI_LIST)); // activo para no retrasar la carga al refrescar. Para probar este componente, descomentar uno de los 2 anteriores 

    const cambiarEmoji = (e) => {
        // desestructurando, volcamos directamente el valor del select en la constante value, que tiene que llamarse así
        // const { value } = e.target;
        // if (value != "none"){
        //     setEmoji(value);
        // }
         // sin desestructurar
        const campo = e.target;
        const valor = campo.value;
        if (valor != "none"){
            setEmoji(valor);
        }

    }

    const incrementarContador = () => {
        setContador(contador + 1);        
    };

    const decrementarContador = () => {
        if (contador >= 1){
            setContador(contador - 1);
        }
    }

    return (
        <section>
    <select onChange={cambiarEmoji}>
      <option value="none">Selecciona otro Emoji</option>
      {EMOJI_LIST.map((em, i) => (
        <option key={i} value={em}>{em}</option>
      ))}
    </select>
            <button onClick={incrementarContador}>+</button>{" "}<button onClick={decrementarContador}>-</button>
            <div>{emoji.repeat(contador)}</div>                
        </section>
    );
}
export default ContadorConEmojis;