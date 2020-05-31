import React, {Component, Fragment} from 'react';
import instance from '../../services/tokenprovider';
import {Link} from 'react-router-dom';

export class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            subscriptions:[]
        }
    }

    componentDidMount(){
        instance.get('allfriends')
        .then(responce => {
            const subscriptions = responce.data;
            this.setState({
                subscriptions
            })
            console.log(subscriptions)
        })
    }

    render(){
        return(
            <Fragment>
                <div className = 'container'>
                    <div className = 'row'>
                        <p id = 'subscriptions'>your subscriptions</p>
                        <div className = 'offset-lg-3 col-lg-6'>
                            {this.state.subscriptions.map(subscriptions => 
                            <div key = {subscriptions.id} className = 'todosItem'> <Link id ='subscriptionsLink' to = {`/user/${subscriptions.nick}`}> @{subscriptions.nick}  </Link>  <hr></hr>
                            <p id = 'description'> user name: {subscriptions. name}</p>
                        </div>)}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Friends;