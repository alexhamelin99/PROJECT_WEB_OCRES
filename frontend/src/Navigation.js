import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){

    return(
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                    <div className="container-fluid d-flex flex-column p-0">
                        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-text mx-3"><h3>ECE Paris</h3></div>
                        </a>
                        <hr className="sidebar-divider my-0"/>
                        <ul className="nav navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item" role="presentation"><Link to="/" className="nav-link active"><span>Dashboard</span></Link></li>
                            <li className="nav-item" role="presentation"><Link to="/Admin" className="nav-link"><span>Admin</span></Link></li>
                        </ul>
                        <div className="text-center d-none d-md-inline"></div>
                    </div>
        </nav>
    )
}export default Navigation;