import React from "react"
export const Componente = ({children, provocarError}) => {
    
    if (provocarError === true){
        throw new Error("Error en el componente");
    }
    return <h3>{children}</h3>
/*
    return (<>
        {nivel == 1 ? <h3>Este es el componente padre</h3> : <h4>Este es el componente hijo</h4>}
        <children />
    </>)
*/    
}