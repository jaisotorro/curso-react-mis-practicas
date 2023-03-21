import { useState } from "react";

const ContadorFuncional = () => {
    const [contador, setContador] = useState(0);

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
            <button onClick={incrementarContador}>+</button>{" "}<button onClick={decrementarContador}>-</button>
            <div>{"X".repeat(contador)}</div>                
        </section>
    );
}
export default ContadorFuncional;