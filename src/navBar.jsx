import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavBar extends Component  {
 render(){
   return (
   <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-style">
      <a className="navbar-brand" href="/#">Ecommerce store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse nav-height" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" >Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/CustomerList" >Customer list</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Dashboard" >Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ShoppingCart" >shopping cart</Link>
          </li>
        </ul>
      </div>
    </nav>
   </React.Fragment>
   ); 
 }
}

export default NavBar;
