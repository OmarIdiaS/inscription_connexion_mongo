class Auth{

    constructor(){
        this.authentificated = false ; 
    }

    login(cb){
        this.authentificated = true;
        cb(); 
    }

    logout(cb){
        this.authentificated = false;
        cb(); 
    }

    isAthenticated(){
        return this.authentificated;
    }

}

export default new Auth();
