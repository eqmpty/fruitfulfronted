import React, {Component, Fragment} from 'react';
import ToDoForm from '../Components/ToDo/ToDoForm';
// import ToDoList from '../Components/ToDo/ToDoList';
// import ToDoDone from '../Components/ToDo/ToDoDone';
//import UserNavBar from '../Components/User/UserNavBar';
import UserNavBarSV from '../Components/Layouts/UserNavBarSV';

export class AddToDoPage extends Component {
    render(){
        return (
            <Fragment>
                {/* <UserNavBar /> */}
                <UserNavBarSV />
                <ToDoForm />
            </Fragment>
        )
    }
}

export default AddToDoPage;