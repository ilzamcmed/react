import React from 'react';

function Card (props){
    return (
        <>
        <img src={props.src} alt=""Gif de mulher dançando/>
        <h1> {props.titulo}</h1>
        <p> {props.subtitulo}</p>

        </>
    )
}

export default Card;