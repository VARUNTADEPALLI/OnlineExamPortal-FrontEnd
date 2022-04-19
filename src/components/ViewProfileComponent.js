import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';


function ViewProfileComponent(){
   
    const location = useLocation();
    const var1 =location.state.var2;
    const history= useNavigate();

    const[Userdetails,setUserdetails] = useState('');
    useEffect(()=>
    {
        getDetails();
    },[])
    

    const getDetails = () =>
    {
        axios.get("http://localhost:9025/getUser/"+var1)
        .then(response => 
            setUserdetails(response.data));
      
    };  



    console.log(Userdetails);

        
        const editHanlder = (e) =>
        {
            e.preventDefault();
            history('/EditUserDetails',{state:{var1}})

        }


    return (
        <div class="container" >
            <div class="row" >
            <div class ="col-3"></div>
            <div class="col-6" >
                <br></br><br></br><br></br>
                <div class="row" >
                <h2 style={{textAlign:"center"}}>User Details</h2>
                </div>
                <br></br>
                <table class="table"> 
               
              
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6>User Id </h6> 
                            </td>
                            <td style={{textAlign:"end"}}>
                            <p>{Userdetails.id}</p>
                            </td>
                            
                        
                        </tr>
                        <tr>
                            <td>
                                <h6> Name </h6> 
                            </td>
                            <td style={{textAlign:"end"}}>
                            <p> {Userdetails.name}</p>
                            </td>   
                       
                        </tr>
                        <tr>
                            <td>
                                <h6> Mobile Number </h6> 
                            </td>
                            <td style={{textAlign:"end"}}>
                                <p>{Userdetails.mobileNumber}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Email Address</h6>
                            </td>
                            <td style={{textAlign:"end"}}>
                                <p>{Userdetails.email}</p>
                            </td>
                        
                        </tr>
                        <tr>
                            <td>
                                <h6> City</h6>
                            </td>
                            <td style={{textAlign:"end"}}>    
                                <p>{Userdetails.city}</p>
                            </td>   

                        </tr>
                        <tr>
                            <td>    
                                <h6> State</h6>
                            </td>
                            <td style={{textAlign:"end"}}>
                                <p>{Userdetails.state}</p>
                            </td>
                        
                        </tr>
                        <tr>
                            <td>
                                <h6>Country</h6>
                            </td>
                            <td
                            style={{textAlign:"end"}}>
                            <p>{Userdetails.country}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Zipcode</h6>
                            </td>
                            <td style={{textAlign:"end"}}>
                            <p>{Userdetails.zip}</p>
                            </td>
                        </tr>
                        <br></br>
                        <tr style={{borderBottom:"white"}}> 
                            <td>
                           
                            </td>
                            <td style={{textAlign:"end"}}>
                            <button  class="btn btn-warning" onClick={editHanlder} >Edit Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        
                   
                    

                   
              
                
       
      
                
                

            </div>
            </div>
            
            
        </div>
    );
}

export default ViewProfileComponent;