import React, { Component } from 'react';
import  './NotFoundStyles.css';

export class NotFound extends Component {
    render() {
        return (
            <div className = 'NotFound'>
                <h1 id = "a"> 404 not found</h1>
                <img id='shark' src={`${process.env.PUBLIC_URL}/img/EG3.gif`} alt="logo"/>
            </div>
        )
    }
}

export default NotFound
