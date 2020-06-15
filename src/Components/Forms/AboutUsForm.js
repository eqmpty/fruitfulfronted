import React, { Component, createContext, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './FormsStyles.css'

export class AboutUsForm extends Component {
    render() {
        return (
            <Fragment>
                <div className = 'container'>
                    <div className = 'row'>
                        <form id = 'aboutPage' className = 'offset-lg-3 col-lg-6'>
                            <p id = 'addNewTask'>about us</p>
                            <p>
                                App which helps you to be more productive. This app is an application 
                                that gives ability for people to make a To-Do List, set goals and be 
                                more fruitful. You will have opportunity to check you statistics and 
                                state of your tasks . Also you can see other users,subscribe to them  
                                and comment their notes.
                            </p>
                            <Link to = '/signup' id = 'signUpLink' > sign up now </Link>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutUsForm; 