import React from 'react';

//a propriedade target armazena a tag e o .value, pega o valor

// const SectionNome = () => {
//     let valor = '';
//     return(

//         <>
//             <input onChange={(e) => {
//                 valor = e.target.value;
//                 console.log(e.target.value)}
//                 }/>
//                 <p>{valor}</p>
//         </>
//     )
// }

class SectionNome extends React.Component {
    //inicializa os valores da nossa classe
    constructor() {
        super();
        // é um objeto q aceita várias propriedades: string, numero, function,array. é onde guardamos as variaveis que desejamos atualizar
        this.state = {
            valor: ''
        }
    }
    //função para capturar o valor do input
   pegaValorInput = (event) => {
       //variável para armazenar o valor do input
    let input = event.target.value;
    //state tem o de atualizar o html novamente a partir do setEtate, a variavel atualiza e o render é rodado novamente, pegando o valor atualizado do state e exibindo na tela;
    //ao executar o setState, o state é atualizado e o render rodado novamente, entap o htmk chama o state novamente com seu valor atualozado
    this.setState({
        valor: input
    })
   }

    render() {
        return(
            <div>
                <input onChange= {this.pegaValorInput}></input>
            
        
                    <p>{this.state.valor}</p>

            </div>
        )
    }
}

export default SectionNome;