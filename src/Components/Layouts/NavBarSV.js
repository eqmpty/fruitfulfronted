import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export class UserNavBarVS extends Component{
    render(){
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand"> fruitful </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active"> <Link className="nav-link" to = '/'> main page <span className="sr-only">(current)</span></Link> </li> */}
                            <li className="nav-item active"> <Link className="nav-link" to = '/whythisapp'>why this app</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to = '/about'> about us</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to = '/feedback'> feed back</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to = '/signin'> sign in</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to = '/signup'> sign up</Link> </li>
                        </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
            </Fragment>
        )
    }
}

export default UserNavBarVS;