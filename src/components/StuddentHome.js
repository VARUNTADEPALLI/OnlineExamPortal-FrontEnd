import React, { useEffect } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';

function StuddentHome() {

    
    const history= useNavigate();
    const location = useLocation();
    const var2=location.state.id;
   
   

    const  testHandler = () =>
    {
        history("/TakeTest")
    }
    const  viewHandler = () =>
    {
        history("/Viewprofile",{state:{var2}})

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
                <button class="btn btn-warning" onClick={testHandler}>Take Test</button>
                </div>
                <div class="col-4">
                <button class="btn btn-dark" onClick={viewHandler}>View Profile</button>
                </div>
                <div class="col-4">
                <button class="btn btn-danger" onClick={signoutHandler}>Signout</button>
                </div>
            </div>
        </div>
    );
}

export default StuddentHome;