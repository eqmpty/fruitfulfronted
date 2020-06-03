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
import MyFriendsPage from './Pages/MyFriendsPage';
//import CommentPage from './Pages/CommentPage';
import CommentPage from './Pages/CommentPage';
import UserItemComment from './Pages/UserItemComment';

class App extends Component {
  render(){
    return (
      // <Provider store = {store}>
      // <LoginForm>          
      <Router>
      <Switch>
        <Route exact path = '/'  component = {MainPage} />
        <Route  path = '/whythisapp'  component = {WaitRorBack} />
        <Route  path = '/about'  component = {WaitRorBack} />
        <Route  path = '/feedback'  component = {WaitRorBack} />
        <Route  path = '/signin' component = {LoginForm} /> 
        <Route  path = '/signup' component = {RegisterForm} />
	      <Route  path = '/success' component = {RegSuccess} />
        <Route  path ='/logout' />
        <PrivateRoute  path = '/userprofile' component = {UserPage} /> 
        <PrivateRoute  path = '/addtodo' component = {AddToDoPage} />
        <PrivateRoute  path = '/completetodos' component = {CompletePage} />
        <PrivateRoute  path = '/statistics' component = {Statistics} />
        <PrivateRoute  path = '/finduser' component = {FindUser} />
        <PrivateRoute  path = "/user/:nick"  component = {withRouter(FriendPage)}/>
        <PrivateRoute  path = "/myfriends"  component = {MyFriendsPage}/>
        {/* //<PrivateRoute  path = "/comment/:todoid"  component = {CommentPage}/> */}
	      <PrivateRoute exact path = "/comment/:todoid"  component = {CommentPage} />
        <PrivateRoute exact path = "/useritemcomment/:todoid"  component = {CommentPage} />
        <Route component = {NotFound} />
      </Switch>
    </Router>
    // </LoginForm> 
    // </Provider>  
    )
  }
}

export default App;
