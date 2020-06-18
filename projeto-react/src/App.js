import React from 'react';
import './App.css';
import Card from './componets/Card/Card'
// import Input from './componets/Input/Input';
import SectionName from './componets/SectionName/SectionName'

function App() {
  return (
    <div>
      <Card titulo="Este é um título" subtitulo="Este é um subtitulo" src="https://media.giphy.com/media/kgThPnMG0b40RMC6gV/giphy.gif" />
     
      
      <Card titulo="Este é o segundo título" subtitulo="Este é o segundo subtitulo" src="https://media.giphy.com/media/Ut8nsZYK1SAp42QKmt/giphy.gif" />
   
      <Card titulo="Este é o terceiro título" subtitulo="Este é o terceiro subtitulo" src="https://media.giphy.com/media/SVfm9NpBocbLH1Kyur/giphy.gif" />
     
      <SectionName />

    </div>
  );
}

export default App;
