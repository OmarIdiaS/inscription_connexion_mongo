import React , {Component} from "react"
import axios from "axios"


class Profile extends Component{

    state= {
        loading: true,
        showLoader: false
     }
     
     componentDidMount() {
         setTimeout(() => {
           
               this.setState({ showLoader: true })
           
         }, 300);
     }

    
    render()
    {
        return(
            <div>
                {this.state.showLoader  ? (<img class="rounded mx-auto d-block" src={require("../uploads/" + this.props.image) } />) : (<div></div>)}
                <h1>{this.props.username}</h1>
                <h1>{this.props.email}</h1>                
            </div>
        )
    }
}

export default Profile