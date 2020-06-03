import React, {Component, Fragment} from 'react';
import instance from '../../services/tokenprovider';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

export class AllComments extends Component {

    constructor(props){
        super(props);
        this.state = {
            comments:[]
        }
    }

    componentDidMount(){
        const currentItemId = (this.props.match.params.todoid);
        console.log('ToDo id form ' + currentItemId)
        instance.get('allcomments/' + currentItemId)
        .then(responce => {
            const comments = responce.data;
            this.setState({
                comments
            })
            console.log(comments)
        })
    }
    render(){
        return(
            <Fragment>
                <div className = 'container'>
                    <div className = 'row'>
                        
                        <div className = 'offset-lg-2 col-lg-8'>
                            {this.state.comments.map(comments => 
                            <div key = {comments.id} className = 'todosItem'> {comments.comment} <hr></hr>
                            {/* <Link to = {`/user/${comments.UserId}`} > d</Link> */}
                            {/* <p id = 'description'>{. description}</p> */}
                            </div>)}
                        </div>    
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(AllComments);