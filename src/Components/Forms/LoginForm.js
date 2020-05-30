import React, { Component, createContext } from 'react'
import { Link } from 'react-router-dom';
import './FormsStyles.css'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export const UserFromContext = createContext()

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: '',
      password: '',
      message: '',
      loading: false,
      isSignedUp: false,
      nickError:'',
      passwordError:''
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  validate = () => {
    let isError = false;
    const errors = {
      nickError: "",
      passwordError: "",
    };

    if (this.state.nick.length === 0) {
      isError = true;
      errors.nickError = "this field cannot be empty";
    }

    if (this.state.password.length === 0 ) {
      isError = true;
      errors.passwordError = "this field cannot be empty";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError
  }

  headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }

  handlerLogin = event => {
    console.log(this.state)
    event.preventDefault();
    const err = this.validate();
    this.setState({
      message: "",
      loading: true
    });

    if(!err){ 
      axios.post('https://fruitfulbacked.herokuapp.com/login', this.state, { 'headers': this.headers })
      .then(response => {
        if (response.data.accessToken) {
          console.log('')
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log('User nick: ' + this.state.nick + response.data.accessToken.accessToken);
        }

        if(response.status === 200){
          this.setState({
            isSignedUp: true
          })
        }
        
      })

      .catch(error => {
        console.log('!Error ' + error);
        const resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();
          this.setState({
            loading: false,
            message: resMessage
          }); 
      })
    } else {
      this.setState({
        loading:false
      })
    }
  }

  render() {
    if (this.state.isSignedUp){
      return <Redirect to = {{ pathname: "/userprofile" }} />;
    }
    const { nick, password, loading, message, nickError, passwordError } = this.state;
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 offset-lg-2 col-lg-8'>
              <div className="form">
                <form onSubmit={this.handlerLogin} className="login-form">
                  <p id='logo2'> fruitful </p>
                  <input type="text" placeholder="nick" name='nick' value={nick} onChange={this.changeHandler} />
                  <p className = 'error'> {nickError} </p>
                  <input type="password" placeholder="password" name='password' value={password} onChange={this.changeHandler} />
                  <p className = 'error'>{passwordError}</p>
                  <button type = 'submit' disabled={loading}> sign in </button>
                  {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                  {message && (<div className="form-group">
                    <div className="error"> your data is incorrect. verify nick or password </div> </div>)}
                  <p id="message"> don't have account ? <Link to='/signup' >  sign up  </Link> </p>
                </form> 
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default LoginForm