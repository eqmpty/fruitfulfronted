import React, {Component, Fragment} from 'react';
import UserProfile from '../Components/User/UserProfile';
import UserNavBar from '../Components/User/UserNavBar';
import UserMenu from '../Components/User/UserMenu';
import LoginForm from '../Components/Forms/LoginForm';
import AllToDo  from '../Components/ToDo/AllToDo';
import UserNavBarSV from '../Components/Layouts/UserNavBarSV';

export class UserPage extends Component{
    render(){
        return (
            <Fragment>
                {/* <UserNavBar /> */}
                <UserNavBarSV />
                <UserProfile />
                <UserMenu />
                <AllToDo />
            </Fragment>
        )
    }
}

export default UserPage;