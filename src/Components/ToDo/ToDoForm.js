import React, {Component, Fragment} from 'react';
import ToDoList from './ToDoList';
import './ToDoStyles.css';
import instance from '../../services/tokenprovider';
import AllToDo from './AllToDo';

export default class ToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            complete:false,
            description:''
        }
    }

    enterToDo = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    sumbitToDo = event => {
        console.log(this.state);
        event.preventDefault();

        this.setState({
            text:'',
            complete:false,
            description:''
        });

        instance.post('addtodo', this.state)
        .then (response => {
            console.log (response)
        })
        .catch (error => {
            console.log('!Error ' + error);
        })
        
        
    }

    render(){
        const {text, description} = this.state;
        return (
            <Fragment>
                <div className = 'container'>
                    <div className = 'row addToDoList'>
                        <div className = 'col-lg-6 toDoBack'>
                            <form onSubmit = {this.sumbitToDo} className = 'addToDoForm'>
                                <p id = 'addNewTask'> add new task </p>
                                <input name = 'text' value = {text} onChange = {this.enterToDo} placeholder = 'to do...'/>
                                <input id= 'descriptionInput' name = 'description' value = {description} onChange = {this.enterToDo} placeholder = 'tell more about it...'/>
                                <button onChange = {this.sumbitToDo} id = 'addToDoButton'> add </button>
                            </form>
                        </div>
                        <div className = 'col-lg-6'>
                            <div className = 'addToDoPictureContainer'>
                                <img id = 'addToDoPicture' 
                                src={`${process.env.PUBLIC_URL}/img/croods-2.png`} 
                                alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
