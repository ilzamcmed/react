import React from 'react';
import Button from '../../components/Button/Button.js'
import BemVinda from '../../components/BemVinda/BemVinda';
import imgGoogle from '../../img/google-logo.png';
import './Home.css';

function Home() {
    return ( 
        <React.Fragment>
            <h1 className="titulo">Home</h1>
            <img src={imgGoogle} alt="Imagem do logo do Google" className="img"/>
            <input type="text"/>
            <div>
                <Button clicar={()=>{console.log('oi')}} acao="Diga oi" />
                <Button clicar={()=>{console.log('tchau')}} acao='Diga Tchau' />
            </div>

           
            <BemVinda nome='Ilza' cidade='Recife'/>
            <BemVinda nome='Raquel' cidade='Salvador' />
        </React.Fragment>
    );
}
export default Home;