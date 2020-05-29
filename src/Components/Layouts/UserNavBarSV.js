import React, {Component, Fragment} from 'react';
import {Link, Router} from 'react-router-dom';
import './UserNaBarSV.css';
import instance from '../../services/tokenprovider'
import FriendProfile from '../User/FriendProfile';
import {withRouter} from 'react-router-dom';

export class UserNavBarVS extends Component{

    constructor(props){
        super(props);
        this.state = {
            findUser:'',
            users:{},
            loading:true
        }
    }

    search = async val => {
        this.setState({loading:true});
        const res = await instance('/finduser/' + val);
        const users = await res.data;
        console.log(users)
        this.setState({users, loading:false})   
    };

    changeHandler = async event => {
        this.search(event.target.value);
        this.setState({ [event.target.name]: event.target.value })
    }

    logout(){
        localStorage.removeItem('user');
    }

    render(){
        const { users } = this.state;
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand"> fruitful </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"> <Link className="nav-link" to = '/'> main page <span className="sr-only">(current)</span></Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to = '/whythisapp'>why this app</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to = '/about'> about us</Link> </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> notes </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to = '/addtodo'> add note </Link>
                                        <Link className="dropdown-item" to = '/completetodos'> complete notes </Link>
                                        <Link className = "dropdown-item" to = '/statistics' > statistics </Link>
                                    </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> profile </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to = '/userprofile'> my profile </Link>
                                        <Link className="dropdown-item" to = '/completetodos' > complete notes </Link>
                                    </div>
                            </li>
                            <input id = 'searchInput' className="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search" name='findUser' value={this.state.findUser}  onChange={event => this.changeHandler(event)} />
                            <li className="nav-item"> <Router><Link to = {`/user/${users.nick}`} params = {users.nick} >   {users.nick} </Link>  </Router> </li>
                            <li className="nav-item"> {this.renderUsers} </li>
                            <li id ='logoutNavItem' className="nav-item"> <Link className="nav-link" to = '/' onClick = {this.logout} > log out</Link> </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default withRouter(UserNavBarVS);