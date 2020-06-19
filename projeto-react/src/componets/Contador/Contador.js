import React, { Component } from 'react';
import Button from '../Button/Button';


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
                {/* Sem usar props */}
                {/* <button className="btn_negativo" onClick={this.diminuirContador}> - </button> */}
                {/* <button className="btn_positivo" onClick={this.aumentarContador}> + </button> */}



                {/* Exporta o botão do componente e usa o props para adicionar valores*/}
                <Button 
                texto=" - " 
                classe="btn_negativo" 
                click={this.diminuirContador}
                />

                <p className="numero"> { this.state.contador } </p>

                <Button 
                texto=" + " 
                classe="btn_positivo" 
                click={this.aumentarContador} 
                />


                <button className="btn_reset" onClick={this.resetContador}>Resetar</button>
                
            </div>
        )
    }
}

export default Contador;