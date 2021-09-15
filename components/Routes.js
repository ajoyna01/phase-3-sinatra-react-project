import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import IcecreamForm from './ReviewForm';




const Routes = () => {
     return (
    <BrowserRouter>
    <Header/>
    <nav className="nav-links">
        <span><Link to='/'> Home </Link></span>
        <span><Link to='/IcecreamForm'> Flavors </Link></span>
        {/* <span><Link to='/Halo'> Halo </Link></span>
        <span><Link to='/Keto'> Halo </Link></span>
        <span><Link to='/Enlightened'> Halo </Link></span>
        <span><Link to='/Rebel'> Halo </Link></span> */}
    </nav>
        <Switch>
            <Route exact path='/' component={Home}/>
           
            <Route exact path='/IcecreamForm' component={IcecreamForm}/>
        </Switch>
        
       
        
    </BrowserRouter>
);
 };

 export default Routes;