import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import routesConfig from './routesConfig';

class App extends Component {
 

  render() {
    return (
<div>
      <div className="App">

        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
      </div>
      {routesConfig.map((value, key) => {
        return <Route
        key={key}
        path={value.path}
        component={value.component}
        exact={value.exact}
        >
        </Route>

      })}
      </div>
    )
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">

//     <Bemvinda nome="Ilza" idade="32"/>
//     <Bemvinda nome="Amanda" idade="24"/>
//     <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;

// ---------------------- METODOS DO CÓDIGO ANTERIOR--------------------------
// changeName = () => {
//   this.setState({
//     nome: 'Ilza é fera'
//   })
// }

// resetName = () => {
//   this.setState({
//     nome: 'Ilza'
//   })
// }

// changeInput = (e) => {

//   let target = e.target; // aqui ele associa o evento a pegar o resultado do input
//   let index = target.name //aqui ele pega os estados dos dois inputs
//   this.setState({
//     [index]: target.value
//   })
// // }

// {/* <div className="App">
// <form>
//   <label name="nome">Nome:</label>
//   <input type="text" name="nome" value={this.state.nome} onChange={this.changeInput}></input>

//   <label name="email">Email:</label>
//   <input type="email" name="email" value={this.state.email} onChange={this.changeInput}></input>
// </form>

// {this.state.nome} -  {this.state.email}

// <div>

//   <button onClick={this.changeName}>Clique para mudar</button>
//   <button onClick={this.resetName}>Reset</button>
// </div>
// //</div> */}