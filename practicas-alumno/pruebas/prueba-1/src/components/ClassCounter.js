import React from "react";
/**
* Componente de clase que define un contador.
*/
class ClassCounter extends React.Component {
    constructor() {
    super();
    // Definimos el valor inicial
    
    this.state = {
    counter: 0
    };
    this.increaseCounter = this.increaseCounter.bind(this);
    }
    // Funcion para aumentar el contador
    increaseCounter() {
    this.setState({
    counter: this.state.counter + 1
    });
    }
    // Mostramos el resultado
    render() {
    return <section aria-label="Contador">
    <button onClick={this.increaseCounter}>Incrementar</button>{" Contador: "}
    <span>{this.state.counter}</span>
    </section>
    }
    }
    export default ClassCounter;
  