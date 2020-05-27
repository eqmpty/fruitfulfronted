import React, {Component, Fragment} from 'react';
import './UserProfileStyles.css'
import {Link} from 'react-router-dom';
//import ModalBasicExample from './AddNote.js';
import ToDoList from '../ToDo/ToDoList';

export class UserMenu extends Component {
    render () {
        return (
            <Fragment>
                <div className = 'container'>
                    <div className = 'row' id = 'userMenuWrapper'>
                        {/* <div className = 'col-xs-12 col-md-4 col-lg-4 text-center'>
                            <Link className = 'userMenuItem'> did </Link>
                        </div> */}
                        <div className = 'col-xs-12 col-md-4 offset-lg-2 col-lg-8 text-center'>
                            <Link className = 'userMenuItem' > active notes </Link>
                        </div>
                        {/* <div className = 'col-xs-12 col-md-4 col-lg-4 text-center'>
                            <Link className = 'userMenuItem'> will do </Link>
                        </div> */}
                    </div>
                    {/* <ToDoList /> */}
                </div>
            </Fragment>
        )
    }
}

export default UserMenu;