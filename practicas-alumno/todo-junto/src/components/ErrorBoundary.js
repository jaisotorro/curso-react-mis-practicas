import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.recuperar = this.recuperar.bind(this);
        this.state = {
            error: false
        }
    }
    static getDerivedStateFromError() {
        return {error: true};
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    recuperar() {
        this.props.onReset();
        this.setState({ error: false });
    }

    render(){
        if (this.state.error === true) {
            return (<>
                <h3>{this.props.mensajeError}</h3>
                <button onClick={this.recuperar}>Recuperar el componente</button>
            </>)
        }
        return this.props.children;
    }
}
export default ErrorBoundary;