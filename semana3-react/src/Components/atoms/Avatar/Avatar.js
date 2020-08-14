import React from 'react';

const Avatar = ({fotoPerfil, altImg}) => {
    return (
        <div> 
            <img src={fotoPerfil} alt={altImg} />
        </div>
    )
}

export default Avatar;
