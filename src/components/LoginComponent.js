import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserDetailsService from '../services/UserDetailsService';
import ViewProfileComponent from './ViewProfileComponent';
import { Link, useNavigate } from "react-router-dom";
import { Action } from 'history';

function LoginComponent(props) {

    const[id,setId]= useState('');
    const[password,setPassword]= useState('');
    const[idError,setIdError]= useState('');
    const[passwordError,setPsswordError]= useState('');
    const[Users,setUsers]= useState('');
    const[User,setUser]= useState('');

    
    let history = useNavigate();
    

    useEffect(()=>
    {
        getUserDetails()

    },[])

  

    const getUserDetails = () =>
    {
        UserDetailsService.getUserDetails().then((response)=>
        {
            setUsers(response.data)
            console.log(response.data);
        }); 
       
        
    }

       
    
   
   
    const idHandler = (e) =>
    {
        setIdError('');
        setId(e.target.value);
    }

    const passwordHandler = (e) =>
    {
        setPsswordError('');
        setPassword(e.target.value);
    } 
    
    
    const loginHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,ctr1=0;
            if(id!=='')
            {
                   ctr++;
            }
            else
            {
                setIdError("User ID required");
            }
            if(password!=='')
            {
                ctr1++;
            }
            else{
                setPsswordError("Password Required");
            }
            if(ctr>0 && ctr1>0)
            {
                if(id==="CAPADMIN[2022]" && password==="capgemini22")
                {
                    history("/AdminHome");

                }
                else
                {
                    let j=0,a=0;
                    for(let i=0;i<Users.length;i++)
                    {
                        
                        if(id===Users[j].id && password===Users[j].password)
                        {
                            a++;
                            break;
                        }
                        j++;
                    }
                    if(a==1)
                    {
                        console.log("logged in");  
                        history("/StudentHome",{state:{id}})  
                    //    history("/Viewprofile",{state:{id}});
                    }
                   else
                    {
                       alert("Incorrect Credentials")
                        console.log("Incorrect Credentials");
                    }

                }

                    
            }
                
            
    }

    return (
        <div>
            
                <div class="container">
                <div class="row">
                    
                    <div class="col-4"></div>
                    <div class="col-4">
                        <br></br>
                        <div class="card border-0">
                            <div class="card-body">
                                <h1 style={{color:"coral",textAlign:"center"}}>Login</h1>
                                <br></br>
                                <form>
                                    <div class="row">
                       
                                            <div className='form-group'>
                                    
                                                <div style={{textAlign:"left"}}>
                                                    <label>User ID </label><span style={{color:'red'}}> * </span>
                                                </div>
                             
                                            
                                                <br></br>
                                                <input type="text" name='id' id="id" class="form-control" onChange={idHandler} placeholder='Enter User Id' value={id}></input>
                                                <div class="row">
                                                    <div style={{textAlign:"left"}}>
                                                    {idError && <span style={{color:'red'}}>{idError}</span>}
                                                    </div>
                                                </div>
                                
                                            </div>
                                    </div>
                                    
                                    
                                    <br></br>
                                    <div class="row">
                                        <div class="col-1"></div>
                                         <div className='form-group'>
                                            <div style={{textAlign:"left"}}>
                                                    <label>Password </label><span style={{color:'red'}}> * </span>
                                                    
                                            </div>  
                                            
                                        
                                            <br></br>
                                            <input type="password" name='password' id="password" class="form-control" onChange={passwordHandler} value={password} placeholder='Enter Password'></input>
                                            <div class="row">
                                                <div style={{textAlign:"left"}}>
                                                    {passwordError && <span style={{color:'red'}}>{passwordError}</span>}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <br></br>
                                <div class="row">
                                    <Link to="/forgotPassword" style={{ textDecoration: 'none' }}>Forgot Password ?</Link>
                                </div>
                                    
                                    <br></br>
                                    <div className='form-group' style={{textAlign:"end"}}>
                                        <button className='btn btn-success   sm-30' onClick={loginHandler}> Log-In</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    
                   
                    </div>
                    <div class="col-4"></div>
            </div>
            </div>
                
        </div>
    );
}

export default LoginComponent;