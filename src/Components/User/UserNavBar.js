import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './UserProfileStyles.css';

export class UserNavBar extends Component {
    logout(){
        localStorage.removeItem('user');
    }
    render(){
        return (
            <Fragment>
                <nav className = 'navigationBar'>
                    <ul className = 'wrapperForNavBar'>
                        <li id='logo'>  fruitful </li>
                        <li className = 'navBarItem'> <Link to = '/'> main page </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/whythisapp'> why this app </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/about'> about us </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/addtodo'> add note </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/userprofile' >  my profile </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/' onClick = {this.logout} >  log out  </Link> </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}


export default UserNavBar;
