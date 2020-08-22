import React, {Component} from 'react'
import axios from 'axios'

class UserNonVerifies extends Component{

    state = {
        usersNonVerifies: [],
        varChange : false,
    }

    
    validerUserBD = async(pseudo, email, mdp, admin, imgg) => {
        await axios.post("http://localhost:8080/users",{
            username  : pseudo, 
            email   : email, 
            password   : mdp, 
            admin   : admin,
            imageURL: imgg
        })
    }


    recupererUserNonVerifies = async() => {
        const noms = await axios.get("http://localhost:8080/usersNonVerifies")
        console.log(noms.data)
        this.setState({usersNonVerifies : noms.data})
        this.setState({varChange : true})
    }

    validerUser = async(id, pseudo, email, mdp, imgg) => {
        console.log("Bonjour")
        await axios.delete("http://localhost:8080/usersNonVerifies/" + id)
        this.validerUserBD(pseudo, email, mdp, false, imgg)
    }

    validerUserAdmin = async(id, pseudo, email, mdp, imgg) => {
        console.log("Bonjour")
        await axios.delete("http://localhost:8080/usersNonVerifies/" + id)
        this.validerUserBD(pseudo, email, mdp, true, imgg)
    }
    componentDidMount(){
        this.recupererUserNonVerifies()
    }



    render(){
        return (<div>
        <h1>Utilisateur Non vérifiés</h1>
        
        <table class="table">
            <thead class="thead-dark">
                <th scope="col">Pseudo</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
            </thead>
            <tbody>
                {this.state.usersNonVerifies.map(opt=> 
                <div>
                    
                    <td><img src={require("../uploads/"+ opt.imageURL )} style={{width: "50px"}} /></td>
                    <td>{opt.pseudo}</td>
                    <td>{opt.email}</td>
                    <td><button onClick={() => this.validerUser(opt._id, opt.pseudo, opt.email, opt.mdp, opt.imageURL)}>Valider</button></td>
                    <td><button onClick={() => this.validerUserAdmin(opt._id, opt.pseudo, opt.email, opt.mdp, opt.imageURL)}>Valider comme Admin</button></td>
                </div>)}
            </tbody>
        </table>

            
        </div>)
    }
}

export default UserNonVerifies
