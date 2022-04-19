import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

function UpdateTestDetails() {

    const location = useLocation();

    const id = location.state.id;

    useEffect(()=>
    {
        getDetails();
    },[])
    

    const getDetails = () =>
    {
        console.log(id);
      
    };  
   
    const[question,setName] = useState('');
    const[nameError,setNameError] = useState('');

    const[option1,setOption1] = useState('');
    const[option1Error,setoption1Error] = useState('');


    const[option2,setOption2] = useState('');
    const[option2Error,setoption2Error] = useState('');

    const[option3,setOption3] = useState('');
    const[option3Error,setoption3Error] = useState('');

    const[option4,setOption4] = useState('');
    const[option4Error,setoption4Error] = useState('');

    const[correctans,setCorrectAns] = useState('');
    const[correctansError,setCorrectansError] = useState('');


    let history = useNavigate();


const questionNameHandler = (e) =>
{
    setNameError('');
    setName(e.target.value);


}



const option1Handler = (e) =>
{
setoption1Error('');
setOption1(e.target.value);
}

const option2Handler = (e) =>
{
    setoption2Error('');
    setOption2(e.target.value);
}
const option3Handler = (e) =>
{
    setoption3Error('');
    setOption3(e.target.value);
}
const option4Handler = (e) =>
{
    setoption4Error('');
    setOption4(e.target.value);
}
const ansHandler = (e) =>
{
setCorrectansError('');
setCorrectAns(e.target.value);
}
const updateHandler = (e) =>
{
    e.preventDefault();
    
    console.log(question);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    console.log(option4);

    let iflag=0,qflag=0,aflag=0,o1flag=0,o2flag=0,o3flag=0,o4flag=0,err=0;


    


    if(question==="")
    {
        setNameError("Question Required");
        qflag++;
    }
    else
    {
        if(qflag===1 && question!=="")
        {
            qflag--;
        }
    }
    if(correctans==="")
    {
        setCorrectansError("Correct Answer Required");
        aflag++;
    }
    else
    {
        if(aflag===1 && correctans!=="")
        {
            aflag--;
        }
    }

    if(option1==="")
    {
        setoption1Error("Option1 Required");
        o1flag++;
    }
    else
    {
        if(o1flag===1 && option1!=="")
        {
            o1flag--;
        }
    }
     
    if(option2==="")
    {
        setoption2Error("Option2 Required");
        o2flag++;
    }
    else
    {
        if(o2flag===1 && option2!=="")
        {
            o2flag--;
        }
    }

    if(option3==="")
    {
        setoption3Error("Option3 Required");
        o3flag++;
    }
    else
    {
        if(o3flag===1 && option3!=="")
        {
            o3flag--;
        }
    }

    if(option4==="")
    {
        setoption4Error("Option4 Required");
        o4flag++;
    }
    else
    { 
        if(o4flag===1 && option4!=="")
        {
            o4flag--;
        }
    }

    

    const sum = iflag+qflag+aflag+o1flag+o2flag+o3flag+o4flag;
    if(sum==0)
    {
        let data = {
            question,correctans,option1,option2,option3,option4
        }
        axios.put("http://localhost:9025/updateTestDetails/"+id,data)
    .then(response =>{console.log(response);}).catch(err => {alert(err);err++;});
    if(err===0)
    {
        alert("Update Successfull");
        history("/");
    }
      
    }

}

const backHandler = () =>
{

}


    return (
        <div class="container">
             <br></br><br></br>
            <h1 style={{color:"sandybrown",textAlign:'center'}}>Update Test Questions</h1>
            <br></br><br></br><br></br>
            <div class="row">
            <form>
            <div class="row">
                    
                    <div class="col-6">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Question</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="name" id="name" placeholder='Enter Question' value={question} onChange={questionNameHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {nameError && <span style={{color:'red'}}>{nameError}</span>} 
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-6">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Correct Answer</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="correctans" id="correctans" placeholder='Enter Correct Answer' value={correctans}  onChange={ansHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {correctansError && <span style={{color:'red'}}>{correctansError}</span>} 
                            </div>
                        
                        </div>
                    </div>
            </div>
            <br></br><br></br>
            <div class="row">
            <div class="col-3">
                        <div className='form-group'>
                            
                            <div class="row">
                                <div style={{textAlign:"left"}}>
                                    <label>Option1</label><span style={{color:"red"}}>* </span>
                                </div>
                            </div>
                            
                            <br></br>
                            <input type="text" name="option1" id="option1" placeholder='Enter Option1' value={option1}  onChange={option1Handler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {option1Error && <span style={{color:'red'}}>{option1Error}</span>} 
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Option2</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="option2" id="option2" placeholder='Enter Option2' value={option2} onChange={option2Handler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {option2Error && <span style={{color:'red'}}>{option2Error}</span>} 
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-3">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Option3</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="option3" id="option3" placeholder='Enter Option3' value={option3} onChange={option3Handler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {option3Error && <span style={{color:'red'}}>{option3Error}</span>} 
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-3">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Option4</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="option4" id="option4" placeholder='Enter Option4' value={option4} onChange={option4Handler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {option4Error && <span style={{color:'red'}}>{option4Error}</span>} 
                            </div>
                        
                        </div>
                    </div>
            </div>
            <br></br><br></br><br></br>
             
            <div class="row">
                
                <div class="col-6">
                
                </div>
                <div class="col-4"></div>
                <div class="col-2" style={{textAlign:"end"}}>
                    
                        <button class="btn btn-danger" onClick={updateHandler} >Update</button> 
                    
                </div>
                
            </div>
            
            </form>
            
            </div>
            
        </div>
    );
}

export default UpdateTestDetails;