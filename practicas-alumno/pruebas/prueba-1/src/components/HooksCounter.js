import { useState } from "react";
import "./Counter.css";

const HooksCounter = () => {
  // Definimos el estado y su valor inicial
  const [counter, setCounter] = useState(0);
  // Definimos la funcion para actualizar el contador
  const increaseCounter = () => {
  setCounter(counter + 1);
  }
  // Mostramos el resultado
  
  return <section aria-label="Contador con Hooks">
  <button onClick={increaseCounter}>Incrementar</button>{" Contador: "}
  <span>{counter}</span>
  </section>
  };
export default HooksCounter;