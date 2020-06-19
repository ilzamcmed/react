import React, { Component } from 'react';
import './Contador.css'

class Contador extends Component {
    constructor() {
        super();
        this.state= {
            contador: 0
        }
    }

    aumentarContador = () => {
       this.setState((state) => ({
           contador: state.contador + 1
       }))
    }

    diminuirContador = () => {
        this.setState( (state) => ({
            contador: state.contador - 1
        }))
    }

    resetContador = () => {
        this.setState( (state) =>  ({
            contador: 0
        }))
    }

    render() {
        return (
            <div className="box">
                <button className="btn_negativo" onClick={this.diminuirContador}> - </button>
                <p className="numero"> { this.state.contador } </p>
                <button className="btn_positivo" onClick={this.aumentarContador}> + </button>
                
                <button className="btn_reset" onClick={this.resetContador}>Resetar</button>
                
            </div>
        )
    }
}

export default Contador;