import React, {Component} from "react"
import axios from 'axios'


class Connexion extends Component{

    state = {
        email : '', 
        mdp   : '',
        validerConnexion : false,
        resultLogin : ''
    }
    
    login = () => {
        
        axios({
          method: "POST",
          data: {
            username: this.state.email,
            password : this.state.mdp
          },
          withCredentials: true,
          url: "http://localhost:8080/login",
        }).then((res) => res.data === "No User Exists" ? (alert("L'un de vos identifiants est incorrect")) : (alert("Connexion resolu")))
        .catch((res) => console.log(res));

        
        
      }


    handleEmail = (event) => {
        this.setState({email : event.target.value})
    }

    handleMDP = (event) => {
        this.setState({mdp : event.target.value})
    }
    

    render(){
        return(
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Pseudo</label>
                    <input type="text" onChange={this.handleEmail} class="form-control"   placeholder="Pseudo" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Mot de passe</label>
                    <input type="password" onChange={this.handleMDP} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div>
                    <button onClick={() => this.login()} className='btn center'>CONNEXION</button>
                </div>
            </div>
        )
    }
}

export default Connexion