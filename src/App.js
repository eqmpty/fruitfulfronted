import React, { Component } from 'react';
import RegisterForm from './Components/Forms/RegisterForm';
import LoginForm from './Components/Forms/LoginForm';
import MainPage from './Pages/MainPage';
import UserPage from './Pages/UserPage';
import WaitRorBack from './Components/Layouts/WaitRorBack';
import NotFound from './Components/Layouts/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './bootstrap.css';
import {PrivateRoute} from './services/privateroute';
import AddToDoPage from './Pages/AddToDoPage';
import LoginPage from './Pages/LoginPage';
import CompletePage from './Pages/CompletePage';
import Statistics from './Pages/Statistics';
import FindUser from './Pages/FindUser';
import FriendPage from './Pages/FriendPage';
import RegSuccess from './Pages/RegSuccess';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      // <Provider store = {store}>
      // <LoginForm>          
      <Router>
      <Switch>
        <Route exact path = '/'  component = {MainPage} />
        <Route exact path = '/whythisapp'  component = {WaitRorBack} />
        <Route exact path = '/about'  component = {WaitRorBack} />
        <Route exact path = '/feedback'  component = {WaitRorBack} />
        <Route exact path = '/signin' component = {LoginForm} /> 
        <Route exact path = '/signup' component = {RegisterForm} />
	      <Route exact path = '/success' component = {RegSuccess} />
        <Route exaxact path ='/logout' />
        <PrivateRoute exact path = '/userprofile' component = {UserPage} /> 
        <PrivateRoute exact path = '/addtodo' component = {AddToDoPage} />
        <PrivateRoute exact path = '/completetodos' component = {CompletePage} />
        <PrivateRoute exact path = '/statistics' component = {Statistics} />
        <PrivateRoute exact path = '/finduser' component = {FindUser} />
        <PrivateRoute exact path = "/user/:nick"  component = {withRouter(FriendPage)} />
        <Route component = {NotFound} />
      </Switch>
    </Router>
    // </LoginForm> 
    // </Provider>  
    )
  }
}

export default App;
