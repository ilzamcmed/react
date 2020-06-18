import React from 'react';

const Button = (props) => {
    return(
        <>
            <button onClick={props.clicar}>{props.acao}</button>
        </>

    );

}
export default Button;