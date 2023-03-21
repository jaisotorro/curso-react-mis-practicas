import { createContext } from "react";
import { TEMAS_DIV } from "../constants/temas_div";

const TemaDiv = createContext({
    valor: TEMAS_DIV.rojo,
    updateValor: () => {}
})
export default TemaDiv;