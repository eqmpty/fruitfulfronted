import React, { Component, Fragment} from 'react';
import './UserProfileStyles.css';
import instance from '../../services/tokenprovider';

export class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser:{}
        }
    }

    componentDidMount(){
        instance.get('getcurrentuser')
        .then(result => {
            this.setState({currentUser:result.data})
            console.log(result)
        })
    }

    render() {
        const {currentUser} = this.state;
        return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-md-center' id='mainInfo'>
                    <p></p>
                    <div className='col-xs-12 col-lg-3 ' id='profilePicture'>
                        <div id='avatar'>
                            {/* <input type ="file" /> */}
                        </div>
                    </div>
                    <div className='col-xs-12 col-lg-3 ' id='profileDescription' >
                        <p id='userName'> {currentUser.name}</p>
                        <span className='userNick'>@</span><span className='userNick'> {currentUser.nick} </span>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default UserProfile;