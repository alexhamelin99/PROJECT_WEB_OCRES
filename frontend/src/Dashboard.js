import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Météo from './components/Météo';
import Graph from './components/Graph';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const items =[
    {
    title:'Comment créer un Dashboard',
    content: 'Il suffit de suivre les cours de Web'
    },
    {
    title: 'Winamax ou Betclic ?',
    content: 'Ca dépend, je peux avoir un freebet sur Winamax ? ;)'
    },
    {
    title: 'OCRES ou SI',
    content: 'La question ne se pose même pas'
    },
];

const options =[
    {
    label:'La couleur rouge',
    value: 'red'
    },
    {
    label: 'La couleur verte',
    value: 'green'
    },
    {
    label: 'La couleur bleue',
    value: 'blue'
    },
];

function Dashboard(){
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown,SetShowDropDown] = useState(false);
    return(
           <div className="d-flex flex-column" id="content-wrapper">
               <div id="content">
                   <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                       <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                           <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                               <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                   <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                               </div>
                           </form><Link to="/Admin"><span>Admin</span></Link></div>
                   </nav>
                   <div className="container-fluid">
                       <div className="d-sm-flex justify-content-between align-items-center mb-4">
                           <h3 className="text-dark mb-0">Dashboard</h3>
                       </div>
                       <div className="row">
                           <div className="col-lg-7 col-xl-8">
                               <div className="card shadow mb-4">
                                   <div className="card-header d-flex justify-content-between align-items-center">Wikipédia</div>
                                   <div className="card-body">
                                   <Graph/>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-5 col-xl-4">
                               <div className="card shadow mb-4">
                                   <div className="card-header d-flex justify-content-between align-items-center">Traduction
                                       <div className="dropdown no-arrow">
                                       <button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"></button>
                                           <div className="dropdown-menu shadow dropdown-menu-right animated--fade-in" role="menu">
                                               <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a className="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                               <div className="dropdown-divider"></div>
                                               <a className="dropdown-item" role="presentation" href="#">&nbsp;Something else here</a></div>
                                       </div>
                                   </div>
                                   <div className="card-body">
                                       <div className="text-center small mt-4"></div>
                                       <Translate/> 
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 mb-4">
                           
                               <div className="card shadow border-left-primary py-2">
                              <h5> Questions existentielles</h5>
                                   <div className="card-body">

                                   <Accordion items ={items}/>
                                   </div>
                               </div>
                           </div>
                           <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 mb-4">
                               <div className="card shadow border-left-success py-2">
                                   <div className="card-body">
                                       <button className="btn" onClick={() => SetShowDropDown(!showDropdown)}>Afficher/Masquer</button>
                                    { showDropdown ?
                                       <Dropdown 
                                       selected = {selected}
                                       onSelectedChange = {setSelected}
                                       options={options}
                                       /> : null
                                    }
                                   </div>
                               </div>
                           </div>
                           <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 mb-4">
                               <div className="card shadow border-left-info py-2">
                                    <h4>Météo</h4>
                                   <div className="card-body">
                                           <Météo/>
                                   </div>
                               </div>
                           </div>
                          
                              
                           
                       </div>
                      
                       <div className="row">
                           <div className="col">
                               <div className="card shadow mb-4">
                                   <div className="card-header d-flex justify-content-between align-items-center">Wikipédia</div>
                                   <div className="card-body">
                                    <Search/>
                                   </div>
                               </div>
                           </div>
                          
                       </div>
                   </div>
               </div>
    </div>
    )
}export default Dashboard;