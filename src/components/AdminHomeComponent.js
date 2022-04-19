import React from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';

function AdminHomeComponent(props) {

    const history= useNavigate();
    const  createHandler = () =>
    {
        history("/CreateTest")
    }
    const  viewHandler = () =>
    {
        history("/ViewTestDetails")

    }

    const signoutHandler = () =>
    {
        history("/login");
    }

    return (
        <div class="container">

            <br></br> <br></br>
            <div class="row">
                <div class="col-4">
                <button class="btn btn-warning" onClick={createHandler}>Create Test</button>
                </div>
                <div class="col-4">
                <button class="btn btn-dark" onClick={viewHandler}>View Test</button>
                </div>
                <div class="col-4">
                <button class="btn btn-danger" onClick={signoutHandler}>Signout</button>
                </div>
            </div>
                
                
                
        </div>
            
       
    );
}

export default AdminHomeComponent;