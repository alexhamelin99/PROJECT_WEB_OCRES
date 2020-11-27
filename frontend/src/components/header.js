import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Header extends Component {
    render(){
        return(

        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0">
                <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>ECE Paris</span></div>
                </a>
                <hr class="sidebar-divider my-0"></hr>
                <ul class="nav navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="index.html"><span>Dashboard</span></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="login.html"><span>Admin</span></a></li>
                    <li class="nav-item" role="presentation"></li>
                </ul>
                
                <div class="text-center d-none d-md-inline"></div>
            </div>
        </nav>
        )
    }
} export default Header;