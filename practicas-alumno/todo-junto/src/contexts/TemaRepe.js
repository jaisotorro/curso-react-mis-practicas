import { createContext } from "react";
import { TEMAS } from "../constants/temas"

const TemaRepe = createContext({
    valor: TEMAS.claro,
    updateValor: () => {}
})
export default TemaRepe;