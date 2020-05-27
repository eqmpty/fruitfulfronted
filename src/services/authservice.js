import axios from 'axios';

const API_URL = 'http://localhost:3001/';

 class AuthService {
    login (nick, password){
        console.log('Login axios 1')
        axios.post(API_URL + 'login', {
            nick,
            password
        })
        .then (response => {
            console.log ('Login axios 2')
            if (response.data.accessToken){
                console.log('Login axios 3')
                localStorage.setItem('user', JSON.stringify(response.data));
            }
        })
        .catch( error => {
            console.log('!Error ' + error);
        })
    }

    logout(){
        localStorage.removeItem('user');
    }

    register(nick, name, email, password){
        return axios.post(API_URL + 'signup', {
            nick,
            name,
            email,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();