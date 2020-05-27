import React, {Component, Fragment} from 'react';
import instance from '../../services/tokenprovider';

export class CompleteToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }

    componentDidMount(){
        instance.get('showallcomplete')
        .then(responce => {
            const todos = responce.data;
            this.setState({
                todos
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
                            <p>{todos.id}</p>
                        </div>)}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CompleteToDo;