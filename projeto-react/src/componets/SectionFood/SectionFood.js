import React from 'react';
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

    

    render() {

        return(
          <div>
              <img src= {this.state.imagemFood} alt="foto "></img>
              <div>
                <button onClick={() => {
                    this.setState({imagemFood:sushi})
                }
                    }>Sushi</button>

                <button onClick={() => {
                    this.setState({imagemFood:burguer})
                }
                    }>Hamburguer</button>
              </div>
          </div> 
          
        )
    }

}

export default SectionFood;