import React, { Component } from 'react';
import Perfil from './img/user.png'
import UserInfoContent from './Components/organisms/UserInfoContent/UserInfoContent';


class App extends Component {

  formatarData(data) {
    return data.toLocaleDateString();
}

  render() {

    return (
      <div>
        <h1>Informações</h1>
        <UserInfoContent
          fotoPerfil={Perfil}
          altImg="Foto de perfl"
          nomeUser="Trabalho para Maria Rita"
          comment="Este é um comentário da Maria"
          data={formatarData(data)}
      

        />
      </div>
    );
  }

}

export default App;
