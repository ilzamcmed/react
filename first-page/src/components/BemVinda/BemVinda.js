import React from 'react';

const BemVinda = (props) => {
    console.log(props)
return <h1>Seja bem vinda {props.nome},  {props.cidade}</h1>
}

export default BemVinda;