import React, { Component } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import NomeUser from '../../atoms/NomeUser/NomeUser';
import Comment from '../../molecules/Comment/Comment'


class UserInfoContent extends Component {

    
    
    
    render() {
        const { nomeUser, fotoPerfil, altImg, comment, data } = this.props
        return (
            <div>
                <Avatar fotoPerfil={fotoPerfil} altImg={altImg} />
                <NomeUser nomeUser={nomeUser} />
                <Comment comment={comment} data={data} />                
            </div>
        );
    }
}

export default UserInfoContent;