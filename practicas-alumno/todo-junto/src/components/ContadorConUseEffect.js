import { useState } from "react";
import { useEffect } from "react";
import random from "../utils/random";

const ContadorConUseEffect = () => {
    // List de emojis
    const EMOJI_LIST = [
    "😃", "😊", "👻", "👾", "🐱", "🐶"
    ]
    let timeout;
    const [contador, setContador] = useState(0);
    const [emoji, setEmoji] = useState(() => random(EMOJI_LIST));
    const [incrementando, setIncrementando] = useState(false);
    const play = () => {
        if (!incrementando){
            setIncrementando(true);
        }
    }
    const stop = () => {
        if (incrementando){
            setIncrementando(false);
        }
    }
    useEffect(() => {
        if (incrementando){
            timeout = setTimeout(incrementarContador,1000) //Asi lo hace bien, respetando lo de uno cada segundo
            // timeout = setTimeout(incrementarContador(),1000) //Asi lo hace también pero a toda leche, sin respetar lo de uno cada segundo
            
        }
        return () => clearTimeout(timeout);
    }, [contador, incrementando]

    );
    const cambiarEmoji = (e) => {
        const { value } = e.target;
        if (value != "none"){
            setEmoji(value);
        }
    }
    const incrementarContador = () => {
        setContador(contador + 1);        
    };
    const resetearContador = () => {
        setContador(0);
    }
    return (
        <section>
            <select onChange={cambiarEmoji}>
                <option value="none">Selecciona otro Emoji</option>
                {EMOJI_LIST.map((em, i) => (
                    <option key={i} value={em}>{em}</option>
                ))}
            </select>
            <button onClick={play}>Empezar</button>{" "}<button onClick={stop}>Parar</button>{" "}<button onClick={resetearContador}>Resetear</button>
                    <div>{emoji.repeat(contador)}</div>                
        </section>
    );
}
export default ContadorConUseEffect;