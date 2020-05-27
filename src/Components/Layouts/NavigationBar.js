import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render () {
        return (
            <div>
                <nav className = 'navigationBar'>
                    <ul className = 'wrapperForNavBar'>
                        <li id='logo'>  fruitful </li>
                        <li className = 'navBarItem'> <Link to = '/whythisapp'> why this app </Link> </li>
                        <li className = 'navBarItem'> <Link to = 'about'> about us </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/feedback'> feedback </Link> </li>
                        <li className = 'navBarItem'> <Link to = '/signin' >  sign in </Link> </li>
                        <li className = 'navBarItem'>  <Link to = '/signup' >  sign up  </Link> </li>
                    </ul>
                </nav>
            </div>  
        )
    }
}

export default Navbar