import { Component } from "react";

class ContadorClase extends Component {
    constructor(props){
        super();
        this.state = {
            contador: 0
        }
        this.incrementarContador = this.incrementarContador.bind(this);
        this.decrementarContador = this.decrementarContador.bind(this);
    }


    incrementarContador() {
        this.setState({
            contador: this.state.contador + 1
        });        
    }

    decrementarContador() {
        if (this.state.contador >= 1){
            this.setState({
                contador: this.state.contador - 1
            });  
        }
    }


    render(){
        return (
            <section>
                <button onClick={this.incrementarContador}>+</button>{" "}<button onClick={this.decrementarContador}>-</button>
                <div>{"X".repeat(this.state.contador)}</div>                

            </section>
        )
    }
}
export default ContadorClase;