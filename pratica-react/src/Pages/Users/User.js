import React, { Component } from 'react';
import UserForm from './UserForm';

class User extends Component {

    render() {
        const list = [
            {name:'Ilza', email: 'ilza@gmail.com'},
            {name: 'Maria', email: 'maria@gmail.com'}
        ]
        return (
            <div>

                <UserForm />
                 <table border='1'>
                    {list.map( item => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default User;