import React, { Component } from "react";

import NavBar from "./navBar"
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";
import Error from "./Error";
import {} from "react-router"
import {Route, Routes, BrowserRouter} from "react-router-dom";



export default class App extends Component{
   render(){
      return ( 
      <BrowserRouter>
          <NavBar/>
          <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="CustomerList" element={<CustomerList/>}/>
                <Route path="Dashboard" element={<Dashboard/>}/>
                <Route path="ShoppingCart" element={<ShoppingCart/>}/>   
            <Route path="*" element={<Error/>}/>
          </Routes>  
      </BrowserRouter>
      );
    } 
}