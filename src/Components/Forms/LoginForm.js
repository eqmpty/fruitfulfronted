import React, { Component, createContext } from 'react'
import { Link } from 'react-router-dom';
import './FormsStyles.css'
import axios from 'axios';
import UserProfile from '../User/UserProfile';

export const UserFromContext = createContext()

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: '',
      password: '',
      message: '',
      loading: false,
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }

  handlerLogin = event => {
    console.log(this.state)
    event.preventDefault();
    this.setState({
      message: "",
      loading: true
    });

    axios.post('https://fruitfulbacked.herokuapp.com/login', this.state, { 'headers': this.headers })
      .then(response => {
        if (response.data.accessToken) {
          console.log('')
          localStorage.setItem('user', JSON.stringify(response.data));
          //console.log(accessToken)
          console.log('User nick: ' + this.state.nick + response.data.accessToken.accessToken);
          //this.props.history.push('/userprofile');
          // window.location.reload();
        }
      })

      .catch(error => {
        console.log('!Error ' + error);
      })
  }

  render() {
    const { nick, password, loading, message } = this.state;
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 offset-lg-2 col-lg-8'>
              <div className="form">
                <form onSubmit={this.handlerLogin} className="login-form">
                  <p id='logo2'> fruitful </p>
                  <input type="text" placeholder="nick" name='nick' value={nick} onChange={this.changeHandler} />
                  <input type="password" placeholder="password" name='password' value={password} onChange={this.changeHandler} />
                  <button type = 'submit'> sign in </button>
                  {message && (<div className="form-group">
                    <div className="alert alert-danger" role="alert"> {message} </div> </div>)}
                  <p id="message"> don't have account ? <Link to='/signup' >  sign up  </Link> </p>
                  {/* {this.props.children} */}
                </form> 
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default LoginForm