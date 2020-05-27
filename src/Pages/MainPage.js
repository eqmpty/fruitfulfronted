import React, { Component } from 'react';
import Navbar from '../Components/Layouts/NavigationBar';
import UserNavBar from '../Components/User/UserNavBar';
import MainPart from '../Components/Layouts/MainPart';
import UserNavBarVS from '../Components/Layouts/UserNavBarSV';
import NavBarVS from '../Components/Layouts/NavBarSV';

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = (localStorage.getItem('user'))
    }

    handleLogOut(){
        this.setState (localStorage.removeItem('user'));
    }

    handleLogin(){
        this.setState(localStorage.getItem('user'));
    }
    render() {
        const {user} = this.props;
        return (
            <div>
                {/* <UserNavBarVS /> */}
                {localStorage.getItem('user') ? <UserNavBarVS /> : <NavBarVS />}
                {/* <Navbar /> */}
                <MainPart />
            </div>
        )
    }
}

export default MainPage
