import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {useLocation, useNavigate} from 'react-router-dom';




function EditUSerDetailsComponent(props) {

    const[email,setEmail]= useState('');

    const[emailError,setEmailError]= useState('');
    const[Users,setUsers]= useState(' ');
    const[name,setName] = useState('');
    const[password,setPassword]= useState('');
    const[passwordError,setPsswordError]= useState('');
    const[nameError,setNameError] = useState('');
    const[mobileNumber,setMobileNumber] = useState('');
    const[mobileNumberError,setMobileNumberError] = useState('');
    const[id,setId] = useState('');
    const[idError,setIdError] = useState('');
    const[city,setCity] = useState('');
    const[cityError,setCityError] = useState('');
    const[country,setCountry] = useState('');
    const[countryError,setCountryError] = useState('');
    const[state,setStateName] = useState('');
    const[stateError,setStateError] = useState('');
    const[zip,setZip] = useState('');
    const[zipError,setZipError] = useState('');
    const[confirmpassword,setConfirmPassword] = useState('');
    const[confirmPasswordError,setConfirmPasswordError] = useState('');
   
    let history = useNavigate();
    const location = useLocation();
    const[Userdetails,setUserdetails] = useState('');
    const var1=location.state.var1

    useEffect(()=>
    {
        getUserDetailsId()

    },[])


    const getUserDetailsId = () =>
    {
        axios.get("http://localhost:9025/getUser/"+var1)
        .then(response => 
            setUserdetails(response.data));
        console.log(Userdetails);
    }
   
    const nameHandler = (e) =>
    {
        setNameError('');
        setName(e.target.value);
        // setUsers(...Users,{name:Users.name})
    }

    const emailHandler = (e) =>
    {
        setEmailError('');
        setEmail(e.target.value);
    }

  

    const cityHandler = (e) => 
    {
            setCityError('');
            setCity(e.target.value);
    }

    const countryHandler = (e) =>
    {
        setCountryError('');
        setCountry(e.target.value);
    }

    const stateHanlder = (e) =>
    {
            setStateError('');
            setStateName(e.target.value);
    }

    const zipHandler = (e) =>
    {
        setZipError('');
        setZip(e.target.value);
    }

    const phoneHandler = (e) =>
    {
        setMobileNumberError('');
        setMobileNumber(e.target.value);
    }
  



    const updateHandler = (e) =>
    {
            e.preventDefault();
            let ctr=0,iflag=0,nflag=0,mflag=0,cflag=0,sflag=0,colag=0,zflag=0,eflag=0,err=0;
            if(email==='')
            {
                setEmailError("Email required");
                eflag++;
            }
            else
            {
                if(eflag===1 && email!=='')
                {
                    eflag--;
                }
                const emailRegx = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if(!emailRegx.test(email))
                {
                    setEmailError("Invalid email");
                    eflag++;
                }
                else
                {
                    if(eflag===1 && emailRegx.test(email))
                    eflag--;
                }
            }   


            

            
            if(name==="")
            {
                setNameError("Name Required");
                nflag++;
            }   
            else
            {
                if(iflag===1 && id!=="")
                {
                    iflag--;
                }   
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(name))
                {
                    setNameError("Enter text without numbers and special characters");
                    nflag++;
                }
                else
                {
                   if(iflag===1 && !sepcialRegx.test(name)) 
                   {
                       nflag--;
                   }
                }
            }

            if(mobileNumber==="")
            {
                setMobileNumberError("Mobile Number Required");
                mflag++;
            }
            else{
                if(mflag===1 && mobileNumber!=="")
                {
                    mflag--;
                }
                if(mobileNumber.length<10 || mobileNumber.length>10)
                {
                    setMobileNumberError("Invalid Mobile number");
                    mflag++;
                }
                else{
                    if(mflag===1 && mobileNumber.length===10)
                    {
                        mflag--;
                    }
                }
            }

            if(city==="")
            {
                setCityError("City Required");
                cflag++;
            }
            else
            {
                if(cflag===1 && city!=="")
                {
                    cflag--;
                }
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(city))
                {
                    setCityError("Enter text without numbers and special characters");
                    cflag++;
                }
                else
                {
                    if(cflag===1 && !sepcialRegx.test(city))
                    {
                        cflag--;
                    }
                }
            }

            if(country==="")
            {
                setCountryError("Country Required");
                colag++;
            }
            else{
                if(colag===1 && country!=="")
                {
                    colag--;
                }
                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(country))
                {
                    setCountryError("Enter text without numbers and special characters");
                    colag++;
                }
                else
                {
                    if(colag===1 && !sepcialRegx.test(country))
                    {
                        colag--;
                    }
                }
            }

            if(state==="")
            {
                setStateError("State Required");
                sflag++;
            }
            else
            {
                 if(sflag===1 && state!=="")
                {
                    sflag--;
                }

                const sepcialRegx = new RegExp("[0-9*#+]+$")
                if(sepcialRegx.test(state))
                {
                    
                    setStateError("Enter text without numbers and special characters");
                    sflag++;
                }
                else
                {
                    if(sflag===1 && !sepcialRegx.test(state))
                    {
                        sflag--;
                    }
                }
            }

            if(zip==="")
            {
                setZipError("Zipcode Required");
                zflag++;
            }
            else
            {
                if(zflag===1 && zip!=="")
                {
                    zflag--;
                }
                if(zip.length>6 || zip.length<6)
                {
                    setZipError("Invalid Zipcode");
                    zflag++;
                }
                else
                {
                    if(zflag===1 && zip.length===6)
                    {
                        zflag--;
                    }
                }
            }

           


           
            
            let sum = iflag+nflag+mflag+cflag+colag+sflag+eflag+zflag;
            if(sum===0)
            {
                
                const password=Userdetails.password;
                const confirmpassword=Userdetails.confirmpassword;
                let data ={
                    var1,name,mobileNumber,city,state,country,zip,email,password,confirmpassword
                };
                console.log(data);
                axios.put("http://localhost:9025/updateUserDetails/"+var1,data)
                .then(response =>{console.log(response);}).catch(err => {alert(err);err++;});
                if(err===0)
                {
                    alert("Update Successful");
                }
                history("/login")
            }
            
    }



    return (
        <div class="container">
            <br></br>
            <h1 style={{color:"sandybrown",textAlign:'center'}}>Edit Details</h1>
            <br></br><br></br>
            <div class="row">
            <form style={{marginLeft:"200px"}}>
                <div class="row">
                    
                    <div class="col-10">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Name</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="name" id="name" placeholder='Enter Name' value={name} onChange={nameHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {nameError && <span style={{color:'red'}}>{nameError}</span>} 
                            </div>
                        
                        </div>
                    </div>
                </div>
                <br></br><br></br>  
                <div class="row">
                    <div class="col-5">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Phone Number</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="number" name="mobileNumber" id="mobileNumber" value={mobileNumber} placeholder='Enter Phone number'onChange={phoneHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {mobileNumberError && <span style={{color:'red'}}>{mobileNumberError}</span>} 
                            </div></div>
                    </div>
                    <div class="col-5">
                        <div className='form-group'>
                        <div style={{textAlign:"left"}}>
                            <label>City</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="text" name="city" id="city" placeholder='Enter city'  value={city} onChange={cityHandler} class="form-control"></input>
                        
                            <div style={{textAlign:"left"}}>
                                {cityError && <span style={{color:'red'}}>{cityError}</span>} 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>  
                <div class="row">
                    <div class="col-5">
                        <div className='form-group'>
                        <div style={{textAlign:"left"}}>
                            <label>State</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="text" name="state" id="state" placeholder='Enter state' value={state} onChange={stateHanlder} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {stateError && <span style={{color:'red'}}>{stateError}</span>} 
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div className='form-group'>
                        <div style={{textAlign:"left"}}>
                            <label>Country</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="text" name="country" id="country"  placeholder='Enter country'value={country} onChange={countryHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {countryError && <span style={{color:'red'}}>{countryError}</span>} 
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <div class="row">
                    <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label>Zipcode</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="number" name="zip" id="zip"  placeholder='Enter zip'value={zip} onChange={zipHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {zipError && <span style={{color:'red'}}>{zipError}</span>} 
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                    <div className='form-group'>
                    <div style={{textAlign:"left"}}>
                            <label>Email</label><span style={{color:"red"}}> * </span>
                        </div>
                            <br></br>
                            <input type="email" name="email" id="email" value={email} placeholder='Enter email' onChange={emailHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {emailError && <span style={{color:'red'}}>{emailError}</span>} 
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <br></br><br></br>
                
                <br></br><br></br>
                
                <div class="row">
                
                    <div class="col-3">
                    {/* <button class="btn btn-warning" onClick={loadHandler} >Back</button>  */}
                    </div>
                    <div class="col-6"></div>
                    <div class="col-3">
                        
                            <button class="btn btn-info" onClick={updateHandler} >Update</button> 
                        
                    </div>
                    
                </div>
                <br></br><br></br>
            </form>
            </div>
            
        </div>
    );
}

export default EditUSerDetailsComponent;