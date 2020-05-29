import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import instance from '../../services/tokenprovider';

export class FriendAllToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{},
            todos:[]
        }
    }

    componentDidUpdate() {
        const userNick = (this.props.match.params.nick);
        console.log(userNick)
        instance('user/' + userNick)
        .then(result => {
            this.setState({user:result.data})
            const userId = result.data.id;
            console.log(userId)
            instance('usertodos/' + userId)
            .then(responce => {
                const todos = responce.data;
                this.setState({
                    todos
                })
                console.log(todos);
            })
        })
    
    }

    render(){
        return(
            <Fragment>
                <div className = 'container'>
                    <div className = 'row'>
                        
                        <div className = 'offset-lg-2 col-lg-8'>
                            {this.state.todos.map(todos => 
                            <div key = {todos.id} className = 'todosItem'> {todos.text} <hr></hr>
                            <p id = 'description'>{todos. description}</p>
                            <p>add comment </p>
                            <p>{todos.id}</p> </div>)}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(FriendAllToDo);