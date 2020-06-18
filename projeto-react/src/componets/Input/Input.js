import React from 'react';
//o props funciona quando eu vou receber algo de fora, nesse caso, é a propriedade tipo que está na variável Input.. do App.js

function Input(props) {
    return (
        <>
        <input type={props.tipoDoInput}></input>
        </>
    )
}

export default Input;