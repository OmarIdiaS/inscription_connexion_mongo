import React, {Component} from 'react'
import axios from 'axios'

class Inscription extends Component{

    state = {
        pseudo : '', 
        email  : '', 
        mdp    : ''
    }

    ajouterNvUtilisateur = async() => {
        await axios.post("http://localhost:8080/usersNonVerifies",{
            pseudo  : this.state.pseudo, 
            email   : this.state.email, 
            mdp     : this.state.mdp, 
        })
        console.log("Utilisateur ajouté")
    }

    handlePseudo = (event) => {
        console.log(event.target.value)
        this.state.pseudo = event.target.value
    }
    handleEmail = (event) => {
        console.log(event.target.value)
        this.state.email = event.target.value
    }
    handleMDP = (event) => {
        console.log(event.target.value)
        this.state.mdp = event.target.value
    }


    render(){
    return (
    <div>
    <div class="form-group">
        <label for="exampleInputEmail1">Pseudo</label>
        <input type="email" onChange={this.handlePseudo} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Adresse Mail</label>
        <input type="email" onChange={this.handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Mot de passe</label>
        <input type="password" onChange={this.handleMDP} class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary" onClick={() => this.ajouterNvUtilisateur()}>Envoyer</button>
  </div>
    )
    }
}

export default Inscription