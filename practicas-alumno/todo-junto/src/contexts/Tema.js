import { createContext } from "react";
import { TEMAS } from "../constants/temas";

const Tema = createContext({
    valor: TEMAS.claro,
    updateValor: () => {}
});
export default Tema;
 