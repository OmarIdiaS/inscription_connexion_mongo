import React, {Component} from 'react'
import axios from 'axios'

class UserVerifies extends Component{

    state = {
        users: [],
    }

    recupererUsers = async() => {
        const noms = await axios.get("http://localhost:8080/users")
        console.log(noms.data)
        this.setState({users : noms.data})
    }

    deleteUser = async(id) => {
        await axios.delete("http://localhost:8080/users/" + id)
    }

    componentDidMount(){
        this.recupererUsers()
    }
    
    render(){
        return (<div>
        <h1>Utilisateurs</h1>
        <table class="table">
            <thead class="thead-dark">
                <th scope="col">Pseudo</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
            </thead>
            <tbody>
                {this.state.users.map(opt=> 
                <div>
                    <td>{opt.pseudo}</td>
                    <td>{opt.email}</td>
                    {opt.admin == true ? (<td>Admin</td>) : (<td>Conseiller</td>)}
                    <td>
                        <button onClick={() => this.deleteUser(opt._id)} type="button" class="close" aria-label="Close">
                        <span aria-hidden="true" style={{color: "red"}}>&times;</span>
                        </button>
                    </td>
                </div>)}
            </tbody>
        </table>
            
            
        </div>)
    }
}

export default UserVerifies
