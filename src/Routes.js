import React, { Component } from 'react';
import {Link ,Route, Switch, BrowserRouter } from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserLoginForm from './Components/UserLoginForm';

class Routes extends Component {
    
    render() { 
        return (  
            <div>
                <Header/>
                
               
                <BrowserRouter>
                <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          {/* <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                          {/* <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route> */}
                          <Route path = "/view-employee" component = {ViewEmployeeComponent}></Route>
                         <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                         <Route path = "/signIn"  component = {UserLoginForm}></Route>
                    </Switch>
                
                </BrowserRouter>

                <Footer/>


            </div>
        );
    }
}
 
export default Routes;