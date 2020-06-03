import React, {Component, Fragment} from 'react';
import UserNavBarSV from '../Components/Layouts/UserNavBarSV';
import AllComments  from '../Components/ToDo/AllComments';

export class UserItemComment extends Component {
    render(){
        return(
            <Fragment>
                <UserNavBarSV />
                <AllComments />
            </Fragment>
        )
    }
}

export default UserItemComment;