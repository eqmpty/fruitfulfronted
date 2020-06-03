import React,{Component,Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import instance from '../../services/tokenprovider'
import './Comment.css'

export class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentItem:{}
        }
    }

    componentDidMount() {
        const currentItemId = (this.props.match.params.todoid);
        console.log('ToDo id ' + currentItemId)
        instance.get('todocomment/' + currentItemId)
        .then(result => {
            this.setState({currentItem:result.data})
            console.log(result.data.id)
            console.log(typeof result)
        })

    }
    render (){
        const {currentItem} = this.state;
        return(
            <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='offset-lg-2 col-lg-8' id = 'ToDoItem'  >
                        <p id='userName'> {currentItem.text}</p> <hr></hr>
                        <p className='userNick'> {currentItem.description} </p>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default withRouter(ToDoItem)