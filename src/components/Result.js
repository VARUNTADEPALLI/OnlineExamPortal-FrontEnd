import React from 'react';
import  { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';;
function Result(props) {
    const location = useLocation();
    const d=location.state.score;
    const e = location.state.er;
    const[Test,setTest] = useState([]);



    return (
        <div class="container">
                <br></br>
               
                <br></br><br></br>
                <div class="row">
                <h1 className='text-center' style={{color:"rebeccapurple"}}>Result</h1>
                <br></br>
               
                <br></br><br></br><br></br><br></br><br></br><br></br>
               
         
                           
                                <div class="row" style={{textAlign:"center"}}>
                                    <div class="col-6">
                                    <h1 style={{color:"coral"}}>Score</h1>
                                    </div>
                                    <div class="col-6">
                                    <h1 style={{color:"coral"}}>{d}</h1>
                                    </div>
                               
                                       

                                </div>
                                
                                
                                <br></br>
                          
                        </div>
              

                    
                
                        
        </div>
    );
}

export default Result;