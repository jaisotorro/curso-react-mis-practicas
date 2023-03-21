import { Component } from "react";
import "./Counter.css";

/**
 * Componente de clase que define un contador.
 */
class Counter extends Component {
  
  constructor() {
    super();

    // Definimos el valor inicial
    this.state = {
      counter: 1
    };

    // Proporcionamos el context correcto a la funcion counter.
    // No es necesario en este caso, ya que la funcion se ejecuta
    // en el mismo contexto, pero una buena practica en cualquier
    // caso.
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  // Funcion para aumentar el contador
  decreaseCounter() {
    if (this.state.counter != 1) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  // Funcion para aumentar el contador
  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  // Mostramos el resultado
  render() {
    return <section className="counter" aria-label="Contador">
      <button onClick={this.decreaseCounter}>Disminuir</button>{" "}
      <button onClick={this.increaseCounter}>Aumentar</button>{" "}
      <div className="counter_result" aria-label="Valor" aria-live="polite">
        {"X ".repeat(this.state.counter)}
      </div>
    </section>
  }
}

export default Counter;