import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom';
import instance from '../../services/tokenprovider'

export class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            comment:''
        }
    }

    enterComment = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        const currentItemId = (this.props.match.params.todoid);
        console.log('ToDo id form ' + currentItemId)
    }

    sumbitComment = event => {
        console.log(this.state);
        event.preventDefault();
        const currentItemId = (this.props.match.params.todoid);
        console.log('ToDo id form ' + currentItemId)

        this.setState({
            comment:''
        });

        instance.post('addcomment/' + currentItemId, this.state )
        .then(responce => {
            console.log(responce)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {comment} = this.state;
        return(
            <Fragment>
                <div className = 'container'>
                    <div className = 'row addToDoList'>
                        <div className = 'offset-lg-2 col-lg-8 toDoBack'>
                            <form onSubmit = {this.sumbitComment}  className = 'addCommentForm' id = 'addComment'>
                                <p id = 'addNewTask'> add comment </p>
                                <input id = 'addComInput' name = 'comment' value = {comment} onChange = {this.enterComment} placeholder = 'write your comment'/>
                                <button id = 'addComBtn' onChange = {this.sumbitComment}> add </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
        
    }
}

export default withRouter(CommentForm)