import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom'

const Cards = ({ id, nome, description, url, acesso }) => {
    return (
        <article key={id}>
            <strong className="list__women-name">{nome}</strong>
            <p className="list__women-description">{description}</p>
            {/* <a href={url} className="list__women-link">Veja mais</a> */}
            <Link className="link" to={acesso}>Acessar</Link>
        </article>
    )
}

export default Cards;