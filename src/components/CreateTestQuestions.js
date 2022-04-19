import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import {useLocation, useNavigate} from 'react-router-dom';

function CreateTestQuestions(props) {

    const[id,setId] = useState('');
    const[idError,setIdError] = useState('');
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

const queestionNumberHandler = (e) =>
{
    setIdError('');
    setId(e.target.value);
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
const saveHandler = (e) =>
{
    e.preventDefault();
    console.log(id);
    console.log(question);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    console.log(option4);

    let iflag=0,qflag=0,aflag=0,o1flag=0,o2flag=0,o3flag=0,o4flag=0,err=0;


    if(id==="")
    {
        setIdError("Id Required");
        iflag++;
    }
    else
    {
        if(iflag===1 && id!=="")
        {
            iflag--;
        }
    }


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
            id,question,correctans,option1,option2,option3,option4
        }
        axios.post("http://localhost:9025/saveTestDetails",data)
                .then(response =>{console.log(response);}).catch(err => {alert(err);err++;});
                if(err===0)
                {
                    alert("suuccessfully saved");
                    window.location.reload();

                }
    }

}
const backHandler=(e)=>
{
    history("/AdminHome");
}




    return (
        <div class="container">
            <br></br><br></br>
            <h1 style={{color:"sandybrown",textAlign:'center'}}>Create Test Questions</h1>
            <br></br><br></br><br></br>
            <div class="row">
            <form>
            <div class="row">
                    <div class="col-2">
                        <div className='form-group'>
                            
                            <div class="row">
                                <div style={{textAlign:"left"}}>
                                    <label>Id</label><span style={{color:"red"}}>* </span>
                                </div>
                            </div>
                            
                            <br></br>
                            <input type="text" name="id" id="id" placeholder='Enter question number' value={id}  onChange={queestionNumberHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {idError && <span style={{color:'red'}}>{idError}</span>} 
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Question</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="name" id="name" placeholder='Enter question' value={question} onChange={questionNameHandler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {nameError && <span style={{color:'red'}}>{nameError}</span>} 
                            </div>
                        
                        </div>
                    </div>
                    <div class="col-4">
                        <div className='form-group'>
                            <div style={{textAlign:"left"}}>
                                <label>Correct Answer</label><span style={{color:"red"}}> * </span>
                            </div>
                            
                            <br></br>
                            <input type="text" name="correctans" id="correctans" placeholder='Enter correctans' value={correctans}  onChange={ansHandler} class="form-control"></input>
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
                            <input type="text" name="option1" id="option1" placeholder='Enter option1' value={option1}  onChange={option1Handler} class="form-control"></input>
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
                            <input type="text" name="option2" id="option2" placeholder='Enter option2' value={option2} onChange={option2Handler} class="form-control"></input>
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
                            <input type="text" name="option3" id="option3" placeholder='Enter option3' value={option3} onChange={option3Handler} class="form-control"></input>
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
                            <input type="text" name="option4" id="option4" placeholder='Enter option4' value={option4} onChange={option4Handler} class="form-control"></input>
                            <div style={{textAlign:"left"}}>
                                {option4Error && <span style={{color:'red'}}>{option4Error}</span>} 
                            </div>
                        
                        </div>
                    </div>
            </div>
            <br></br><br></br><br></br>
             
            <div class="row">
                
                <div class="col-6">
                <button class="btn btn-warning" onClick={backHandler} >Back</button> 
                </div>
                <div class="col-4"></div>
                <div class="col-2" style={{textAlign:"end"}}>
                    
                        <button class="btn btn-danger" onClick={saveHandler} >Create</button> 
                    
                </div>
                
            </div>
            
            </form>
            
            </div>
            
        </div>
    );
}

export default CreateTestQuestions;