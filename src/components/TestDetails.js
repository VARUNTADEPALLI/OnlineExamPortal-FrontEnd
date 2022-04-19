import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';

function TestDetails(props) {

const[Test,setTest] = useState([]);
const[Testid,setTestid] = useState('');

const history = useNavigate();
useEffect(()=>
{
    getTestDetails();
},[])
const err=0;

const getTestDetails = () =>
{
    axios.get("http://localhost:9025/getAllTestQuestions")
    .then(response => setTest(response.data));
    
    
}
const deleteHandler = (id) =>
{
    console.log(id);
    axios.delete("http://localhost:9025/deleteTestDetails/"+id)
    .then(response =>{console.log(response);}).catch(err => {alert(err);err++;});
    if(err!==0)
    {
        alert("Error");
    }
    else{
        alert("success");
        window.location.reload();

    }
   
}


const updateHandler = (id) =>
{
    console.log(id);
    history("/UpdateTestDetails",{state:{id}});
  
}
const backHandler = (e) =>
{
    e.preventDefault();
    history("/AdminHome");
}




    return (
        
            <div class="container">
                <br></br>
                <h1 className='text-center' style={{color:"rebeccapurple"}}> Test Details</h1>
                <br></br><br></br>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <td class="blockquote">ID</td>
                        <td class="blockquote">Question</td>
                        <td class="blockquote">Option1</td>
                        <td class="blockquote">Option2</td>
                        <td class="blockquote">Option3</td>
                        <td class="blockquote">Option4</td>
                        <td class="blockquote">Correct Answer</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        Test.map(
                            Test =>
                                <tr key={Test.id}>
                                    <td>{Test.id}</td>
                                    <td>{Test.question}</td>
                                    <td>{Test.option1}</td>
                                    <td>{Test.option2}</td>
                                    <td>{Test.option3}</td>
                                    <td>{Test.option4}</td>
                                    <td>{Test.correctans}</td>
                                    <td style={{marginLeft:"15px"}}>
                                      <button class="btn btn-warning" onClick={() =>updateHandler(Test.id)}>Update</button>
                                    </td>
                                    <td style={{textAlign:"end"}}>
                                       <button  class="btn btn-danger" onClick={()=>deleteHandler(Test.id)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                    <br>
                    </br>
                   <tr style={{borderBottom:"white"}}> 
                            <td>
                            <button class="btn btn-info" onClick={backHandler}>Back</button>
                            </td>
                           
                        </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TestDetails;