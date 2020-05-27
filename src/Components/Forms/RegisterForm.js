import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FormsStyles.css'

import axios from 'axios';

class RegisterForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            nick:'',
            name:'',
            email:'',
            password:'',
            nickError:''
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
      
    validate = () => {
        let nickError = "";

        if (!this.state.nick) {
            nickError = "name cannot be blank";
        }

        return true;

    }
    sumbitHandler = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            axios.post('https://fruitfulbacked.herokuapp.com/signup', this.state, {'headers':this.headers})
        .then (response => {
            console.log (response)
        })
        .catch (error => {
            console.log('!Error ' + error);
        })
        }
        // console.log(this.state);
        // axios.post('http://localhost:3001/signup', this.state, {'headers':this.headers})
        // .then (response => {
        //     console.log (response)
        // })
        // .catch (error => {
        //     console.log('!Error ' + error);
        // })
    }

    render () {
        const {nick, name, email, password, nickError} = this.state;
        return (
            <div>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-xs-12 offset-lg-2 col-lg-8'>
                        <div className="form">
                            <form onSubmit = {this.sumbitHandler}  className="register-form">
                                <p id='logo2'> fruitful </p>
                                <input type="text" placeholder="nick" name = 'nick' value = {nick}  onChange = {this.changeHandler}/>
                                <div style={{ fontSize: 12, color: "red" }}> {nickError}</div>
                                <input type="text" placeholder="name" name = 'name' value = {name}  onChange = {this.changeHandler} />
                                <input type="text" placeholder="email address" name = 'email' value = {email}  onChange = {this.changeHandler}/>
                                <input type="password" placeholder="password" name = 'password' value = {password} onChange = {this.changeHandler}/>
                                <button type = 'submit'> create</button>
                                <p id="message">already registered ? <Link to = '/signin' >  sign in </Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
        )
    }
}



export default RegisterForm