import { forwardRef, useRef, useState } from "react";
import { useEffect } from "react";
import random from "../utils/random";

const ContadorConUseRef = forwardRef((_props, inputRef) => {
    // List de emojis
    const EMOJI_LIST = [
    "😃", "😊", "👻", "👾", "🐱", "🐶"
    ]

    const [contador, setContador] = useState(0);
    const [emoji, setEmoji] = useState(() => random(EMOJI_LIST));
    const [incrementando, setIncrementando] = useState(false);
    const [name, setName] = useState("");
    const timeoutRef = useRef(null);
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
            timeoutRef.current = setTimeout(incrementarContador,1000)
        }
        return () => clearTimeout(timeoutRef.current);
    }, [contador, incrementando]
    );
    useEffect(() => console.log("Cambia timeoutRef.current"), [timeoutRef.current]);
    let timeout;
    useEffect(() => {
        if (incrementando){
            timeout = setTimeout(incrementarContador,1000)
        }
        return () => clearTimeout(timeout);
    }, [contador, incrementando]
    );
    useEffect(() => console.log("Cambia timeout"), [timeout]);

    const cambiarEmoji = (e) => {
        const { value } = e.target;
        if (value != "none"){
            setEmoji(value);
        }
    }
    const cambiarNombreContador = (e) => {
        setName(e.target.value)
    }
    const incrementarContador = () => {
        setContador(contador + 1);        
    };
    const resetearContador = () => {
        setContador(0);
    }
    return (
        <section>
            <input ref={inputRef}value={name} onChange={cambiarNombreContador} placeholder="Introduce el nombre del contador" />
            <select onChange={cambiarEmoji}>
                <option value="none">Selecciona otro Emoji</option>
                {EMOJI_LIST.map((em, i) => (
                    <option key={i} value={em}>{em}</option>
                ))}
            </select>
            <button onClick={play}>Empezar</button>{" "}<button onClick={stop}>Parar</button>{" "}<button onClick={resetearContador}>Resetear</button>
            <div>
                <h4>{name}</h4>                        
                {emoji.repeat(contador)}
            </div>                
        </section>
    );
})
export default ContadorConUseRef;