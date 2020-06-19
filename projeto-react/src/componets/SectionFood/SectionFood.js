import React from 'react';
import Button from '../Button/Button'
import sushi from '../../img/sushi.jpeg';
import burguer from '../../img/hamburguer.jpeg';
import combo from '../../img/combo.jpg'



class SectionFood extends React.Component {
    constructor() {
        super()
        this.state = {
            imagemFood: combo,
            visivel: false
        }
    }

    mostraBurguer = () =>{
        this.setState({imagemFood:burguer})
    }

    mostraSushi = () => {
        this.setState({imagemFood:sushi})
    }
    

    render() {

        return(
          <div>
              <p>Qual escolher?</p>
              <img src= {this.state.imagemFood} alt="foto "></img>
              
              <div>
                <Button 
                click={this.mostraSushi} texto="Sushi" />

                <Button 
                click={this.mostraBurguer} texto="Hamburguer" />
                </div>
          </div> 
          
        )
    }

}

export default SectionFood;