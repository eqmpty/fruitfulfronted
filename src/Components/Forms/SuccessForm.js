import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './FormsStyles.css';

export class SuccessForm extends Component {
    render(){
        return(
            <Fragment>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-lg-4 successForm successForm'>
                            <p id = 'successTitle'> congratulations you have successfully registered </p>
                            <Link id = 'successLink' to = '/signin'> login </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SuccessForm;