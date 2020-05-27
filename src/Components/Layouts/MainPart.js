import React, {Component} from 'react';


export class MainPart extends Component {
    render () {
        return (
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-xs-12 col-lg-6'>
                        <main id = 'mainPartInPage'>
                            <div id = 'tagLinesPart'>
                                <p id = 'appTagline' className = 'text-center' > are you going to do it tommorow ? </p>
                                <p id = 'appDescribe'> tasks, goals & more </p>
                                <button id = 'signUpButton'> sign up with email </button>
                                <p id = 'haveAcc'> <a href = '/'> already have an account ?</a> </p>
                            </div>
                        </main>
                    </div>
                    <div className = 'col-xs 12 col-lg-6'>
                        <div >
                            <img id = 'pictureMainOnPage' 
                            src={`${process.env.PUBLIC_URL}/img/croods-5.png`} 
                            alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPart