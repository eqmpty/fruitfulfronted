import React, {Component, Fragment} from 'react';
import UserNavBarSV from '../Components/Layouts/UserNavBarSV'; 
import Friends from '../Components/User/Friends';

export class MyFriendsPage extends Component {
    render(){
        return(
            <Fragment>
                <UserNavBarSV />
                <Friends />
            </Fragment>
        )
    }
}

export default MyFriendsPage;