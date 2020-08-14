import React from 'react'

const Bemvinda = ({nome, idade}) => {
    return(

        <div className='bemVinda--conainer'>
            <h2>Bem vinda, {nome}!</h2>
            <h4>Tenho  {idade} anos. </h4>
            
        </div>
        
    )
}
export default Bemvinda