import React, {Component, Fragment} from 'react';
import NavBarSV from '../Components/Layouts/NavBarSV';
import SuccessForm from '../Components/Forms/SuccessForm';

export class RegSuccess extends Component {
    render(){
        return(
            <Fragment>
                <NavBarSV />
                <SuccessForm />
            </Fragment>
        )
    }
}

export default RegSuccess;