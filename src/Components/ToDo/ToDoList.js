import React, {Component, Fragment} from 'react';
import ToDoForm from './ToDoForm';
import ToDoDone from './ToDoDone';
import './ToDoStyles.css';

export class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos:[],
        }
    }

    addToDo = toDo => {
        this.setState({
            todos:[toDo, ...this.state.todos]
        })
    }

    
    render(){
        return (
            <Fragment>
                <div className = 'try'>
                    <ToDoForm onSubmit = {this.addToDo} />
                    {this.state.todos.map(toDo => (
                    <ToDoDone   key = {toDo.id} 
                                toggleComplete = { () => {this.toggleComplete (toDo.id)}}
                                text = {toDo.text} />
                    ))}
                    <h1> hel0000lo </h1>
                </div>
            </Fragment>
        )
    }
}

export default ToDoList;