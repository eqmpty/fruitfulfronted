import React, {Component, Fragment} from 'react';
import UserNavBarSV from '../Components/Layouts/UserNavBarSV';
import FriendProfile from '../Components/User/FriendProfile';
import FriendAllToDo from '../Components/ToDo/FriendAllToDo';
import UserMenu from '../Components/User/UserMenu';

export class FriendPage extends Component {
    render() {
        return(
            <Fragment>
                <UserNavBarSV />
                <FriendProfile />
                <UserMenu />
                <FriendAllToDo />
            </Fragment>
        )
    }
}

export default FriendPage;