import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';


class Comment extends Component {
    constructor() {
        super()
        this.state={
            texto: ''
        }
    }

    addComment = (event) => {
        this.setState({

            texto: event.target.value
        })
        
    }
    render() {
        return(
            <>
            <h2>Digite aqui teu comentário:</h2>
           <Input tipo="textarea" change={this.addComment}/>
           {/* <Button click={this.addComment} texto="Enviar" /> */}

           <p>{this.state.texto}</p>
           
           </>
        )
    }
}


export default Comment;