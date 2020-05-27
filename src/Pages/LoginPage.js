import React, {Component, Fragment} from 'react';
import Navbar from '../Components//Layouts/NavigationBar';
import LoginForm from '../Components/Forms/LoginForm';

export class LoginPage extends Component {
    render(){
        return(
            <Fragment>
                <Navbar />
                <LoginForm />
            </Fragment>
        )
    }
}

export default LoginPage;