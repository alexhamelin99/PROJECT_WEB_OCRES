import React from 'react';
import {Link} from 'react-router-dom';
import CreateExercise from './components/Ajouter_Question';
import CreateUser from './components/Ajouter_User';

function Admin(){

    return(
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content"> 
                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3"
                            id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text"
                                    placeholder="Search for ..." />
                                <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i
                                            className="fas fa-search"></i></button></div>
                            </div>
                        </form>
                        <Link to="/"><span>Dashboard</span></Link>
                    </div>
                </nav>
                <CreateUser/>
                <CreateExercise/>
        </div>
        </div>
    )
}export default Admin;