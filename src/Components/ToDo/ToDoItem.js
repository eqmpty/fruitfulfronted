import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import instance from '../../services/tokenprovider';

export class ToDoItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentToDo:{}
        }
    }

    componentDidMount(){
        const ToDoItem = (this.props.match.params.todoid);
        instance.get('todocomment/' + ToDoItem)
        .then(result => {
            this.setState({currentToDo:result.data})
            console.log(result)
        })
    }

    render(){
        return(
            <Fragment>
                ToDoItem
            </Fragment>
        )
    }
}

export default withRouter(ToDoItem);