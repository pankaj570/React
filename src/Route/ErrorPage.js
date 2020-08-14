import { Link } from "react-router-dom";
import React,{Component } from 'react';

class ErrorPage extends Component{
    render(){
        return(
            <div>
                <h1>Opps Somthing went wrong !</h1>
                <Link to='/'>Home</Link>
            </div>
           );
    }
};

export default ErrorPage;