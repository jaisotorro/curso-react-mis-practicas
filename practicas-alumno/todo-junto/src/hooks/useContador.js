import { useCallback, useEffect, useRef, useState } from "react";

const useContador = () => {
    const [contador, setContador] = useState(0)
    const [avanzando, setAvanzando] = useState(false);
    
    const avanzar = useCallback(() => {
        setAvanzando(true)
    },[contador, avanzando])
    const timeoutRef = useRef()

    const detener = useCallback(() => {
        setAvanzando(false);
    },[contador, avanzando])

    const resetear = useCallback(() => {
            detener();
            setContador(0);
    },[contador,avanzando])
 
    useEffect(() => {
        if (avanzando){
            timeoutRef.current = setTimeout(() => {setContador(contador + 1)}, 1000)
        }
        return () => clearTimeout(timeoutRef.current);
    },[contador,avanzando])


        return ({
        valor: contador,
        estaAvanzando: avanzando,
        avanzar,
        detener,
        resetear
    })


}
export default useContador;
