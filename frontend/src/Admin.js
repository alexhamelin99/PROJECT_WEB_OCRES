import React from 'react';
import {Link} from 'react-router-dom';

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
                        <Link to="/Admin"><span>Admin</span></Link>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Admin</h3>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-md-10 col-sm">  
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Tapez votre question</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Pourquoi le ciel est bleu ?"/>
                                </div>
                                <div className="form-group">
                                <label for="exampleInputEmail1">Tapez votre réponse</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="C'est comme ça"/>
                                </div>
                        </div>
                        <div className="col-xl-8 col-md-10 col-sm">
                            <button type="submit" className="btn btn-danger">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}export default Admin;