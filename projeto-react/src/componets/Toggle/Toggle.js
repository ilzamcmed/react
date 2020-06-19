import React from 'react';

class Toggle extends React.Component{
    constructor(){
        super()
        this.state= {
            visivel:false
        }
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.setState({visivel: !this.state.visivel})}>Toggle Button</button>
                </div>

                { this.state.visivel ? <div>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                </div> : ''
                }
            </>
        )
    }
}

export default Toggle;