import React, {Component, Fragment} from 'react';
import instance from '../../services/tokenprovider';
import {Link} from 'react-router-dom';
import './ToDoStyles.css'

export class AllToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }

    componentDidMount(){
        instance.get('showalltodos')
        .then(responce => {
            const todos = responce.data;
            this.setState({
                todos
            })
        })
    }

    completeItem(toDoId){
        const {todos} = this.state;
        const formData = new FormData();
        formData.append('toDoId', toDoId);
        const options = {
            body:formData
        }
        instance('/update/' + toDoId, options)
        .then(
            result => {
                this.setState({
                    responce:result,
                    todos:todos.filter(toDo => todos.id !== toDoId)
                })
            }
        )
        .catch(error => {
            console.log(error);
        })
    }

    deleteItem(toDoId){
        const {todos} = this.state;
        const formData = new FormData();
        formData.append('toDoId', toDoId);
        const options = {
            body:formData
        }
        instance('/delete/' + toDoId, options)
        //console.log('ToDoId = ' + toDoId)  
        .then(
            result => {
                this.setState({
                    responce:result,
                    todos:todos.filter(toDo => todos.id !== toDoId)
                })
            }
        )
        .catch(error => {
            console.log(error);
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
                            <div id = 'wrapper'>
                                <button  id= 'completeBtn' onClick = {() => this.completeItem(todos.id)}> Complete</button> 
                                <button id= 'deleteBtn' onClick = {() => this.deleteItem(todos.id)}> Delete</button> 
                                <Link className = 'myLink' to = {`/useritemcomment/${todos.id}`} > see comments </Link>
                            </div>
                            </div>)}
                        </div> 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AllToDo;