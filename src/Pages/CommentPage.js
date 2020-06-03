import React, {Component,Fragment} from 'react'
import UserNavBarSV from '../Components/Layouts/UserNavBarSV';
import ToDoItem from '../Components/ToDo/ToDoItem'
import CommentForm from '../Components/Forms/CommentForm';
import AllComments  from '../Components/ToDo/AllComments';

export class CommentPage extends Component {
    render(){
        return(
            <Fragment>
                <UserNavBarSV />
                <ToDoItem />
                <CommentForm />
                <AllComments />
            </Fragment>
        )
    }
}

export default CommentPage;