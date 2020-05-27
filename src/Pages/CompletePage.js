import React, {Component, Fragment} from 'react';
import CompleteToDo from '../Components/ToDo/CompleteToDo';
import UserNavBar from '../Components/User/UserNavBar';
import UserNavBarSV from '../Components/Layouts/UserNavBarSV';

export class CompletePage extends Component {
    render(){
        return(
            <Fragment>
                {/* <UserNavBar /> */}
                <UserNavBarSV />
                <CompleteToDo />   
            </Fragment>
        )
    }
}

export default CompletePage;