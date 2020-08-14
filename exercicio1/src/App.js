import React from 'react';
import './App.css';

const App = () => {


  const laura = {
    cliente: 'Laura',
    idade: 27,
    compras: [
      { nome: 'notebook', preco: 'R$ 2500' },
      { nome: 'geladeira', preco: 'R$ 3000' },
      { nome: 'smartphone', preco: 'R$ 1500' },
    ],
    ativa: true
  }
  const marcio = {
    cliente: 'Marcio',
    idade: 31,
    compras: [
      { nome: 'notebook', preco: 'R$ 2500' },
      { nome: 'geladeira', preco: 'R$ 3000' },
      { nome: 'smartphone', preco: 'R$ 1500' },
      { nome: 'guitarra', preco: 'R$ 3500' },
    ],
    ativa: false
  }
  const dados = marcio

  const isActve = () => {
    if (dados.ativa) {
      return { color: 'green' }
    } else {
      return { color: 'red' }
    }
  }

  const dadosMapeados = dados.compras.map(item => Number(item.preco.replace('R$ ', '')));
  const somaTotal = dadosMapeados.reduce((acc, total) => {
    return acc + total;
  })

  return (
    <div className="App">
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={isActve()}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
      <p>Total gasto: {somaTotal}</p>
      {somaTotal > 10000 ?
        (<p>Você está gastando muito!</p>) : null}

    </div>
  );
}

export default App;
