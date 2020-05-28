import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FormsStyles.css'

import axios from 'axios';

class RegisterForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            nick:'',
            nickError:'',
            name:'',
            nameError:'',
            email:'',
            emailError:'',
            password:'',
            passwordError:''
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    validate = () => {
        let isError = false;
        const errors = {
          nickError: "",
          nameError: "",
          emailError: "",
          passwordError: ""
        };
    
        if (this.state.nick.length < 10 || this.state.nick.length > 30) {
          isError = true;
          errors.nickError = "your nick needs to be between 10 and 30 characters";
        }

        if (this.state.name.length === 0 || this.state.name.length > 40 ) {
            isError = true;
            errors.nameError = "your name should not containt more than 40 characters";
        }
    
        if (this.state.email.indexOf("@") === -1 ) {
          isError = true;
          errors.emailError = "requires valid email";
        }

        if (this.state.password.length < 15 || this.state.password.length > 100) {
            isError = true;
            errors.passwordError = "passoword needs to be between 15 and 100 characters";
        }
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };
    
    headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
      
    
    sumbitHandler = event => {
        event.preventDefault();
        const err = this.validate();
        if (!err) {
            console.log(this.state);
            axios.post('https://fruitfulbacked.herokuapp.com/signup', this.state, {'headers':this.headers})
            // this.props.history.push('/success');
            // window.location.reload()
        .then (response => {
            console.log (response)
        })
        .catch (error => {
            console.log('!Error ' + error);
        })
        }
    }

    render () {
        const {nick, name, email, password, nickError, nameError,emailError, passwordError } = this.state;
        return (
            <div>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-xs-12 offset-lg-2 col-lg-8'>
                        <div className="form">
                            <form onSubmit = {this.sumbitHandler}  className="register-form">
                                <p id='logo2'> fruitful </p>
                                <input type="text" placeholder="nick" name = 'nick' value = {nick}  onChange = {this.changeHandler}/>
                                <p className = 'error'> {nickError} </p>
                                <input type="text" placeholder="name" name = 'name' value = {name}  onChange = {this.changeHandler} />
                                <p className = 'error'>{nameError}</p>
                                <input type="text" placeholder="email address" name = 'email' value = {email}  onChange = {this.changeHandler}/>
                                <p className = 'error'>{emailError}</p>
                                <input type="password" placeholder="password" name = 'password' value = {password} onChange = {this.changeHandler}/>
                                <p className = 'error'>{passwordError}</p>
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