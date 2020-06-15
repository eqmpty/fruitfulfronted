import React, { Component, Fragment } from 'react';
import UserNavBarVS from '../Components/Layouts/UserNavBarSV';
import NavBarVS from '../Components/Layouts/NavBarSV';

export class AboutUsPage extends Component {
    render(){
        return (
            <Fragment>
                {localStorage.getItem('user') ? <UserNavBarVS /> : <NavBarVS />}
            </Fragment>
        )
    }
}

export default AboutUsPage;