import React, { Component, Fragment } from 'react';
import UserNavBarVS from '../Components/Layouts/UserNavBarSV';
import NavBarVS from '../Components/Layouts/NavBarSV';
import AboutUsForm from '../Components/Forms/AboutUsForm';

export class AboutUsPage extends Component {
    render(){
        return (
            <Fragment>
                {localStorage.getItem('user') ? <UserNavBarVS /> : <NavBarVS />}
                <AboutUsForm />
            </Fragment>
        )
    }
}

export default AboutUsPage;