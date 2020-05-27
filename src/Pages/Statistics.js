import React, {Component, Fragment} from 'react';
import UserNavBarSV from '../Components//Layouts/UserNavBarSV';
import GetStatistics from '../Components/ToDo/getStatistics';

export class Statistics extends Component {
    render(){
        return(
            <Fragment>
                <UserNavBarSV />
                <GetStatistics />
            </Fragment>
        )
    }
} 

export default Statistics;