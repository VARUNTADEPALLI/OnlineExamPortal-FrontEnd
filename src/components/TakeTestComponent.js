import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function TakeTestComponent(props) {
    const [correctAnswers, setCorrectAnswers] = useState([]);
    
    const[Test,setTest] = useState([]);

    let history = useNavigate();

    useEffect(()=>
    {
        getTestDetails();
    },[])

    const getTestDetails = () =>
    {
        axios.get("http://localhost:9025/getAllTestQuestions")
        .then(response=>setTest(response.data));
    }


const submiHandle = (e) =>
{
   e.preventDefault();
  console.log("correctAnswers", correctAnswers)
        const questionCount = Test.length;
        let score = 0,er=0
        correctAnswers.forEach(item=> {
            if(item.answer === item.correctAnswer){
                score = score + 1
            }
            else{
                er=er+1;
            }
        })
        console.log("Total Questions:", questionCount)
        console.log("Score:", score)
        history("/result",{state:{score}},{state:{er}});
}
const optionOnChange = (item) => {
    // console.log("optionOnChange", item)
    let index;
    index = correctAnswers.findIndex(x => x.id==item.id);
    if(index > -1){
        correctAnswers[index]['answer'] = item.answer; 
    }else{
        correctAnswers.push(item)
    }
}


    return (
        <div class="container">
            <br></br>
                <h1 className='text-center' style={{color:"rebeccapurple"}}>Java MCQ Test</h1>
                <br></br><br></br>
            
                    {
                        Test.map(
                            Test =>
                                <h8 key={Test.id}>
                                    <div class="row" >
                                        
                                            {Test.id}
                                     
                                        <div class="col-10">
                                            {Test.question}
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="row" style={{marginLeft:"5px"}} >
                                        <div class="col-3">
                                        <input type="radio" value="option1" name={`'option'${Test.id}`} onChange={(e) => optionOnChange({id:Test.id,answer:e.target.value, correctAnswer:Test.correctans})}></input>
                                         {Test.option1}
                                        </div>
                                        <div class="col-3">
                                        <input type="radio" value="option2" name={`'option'${Test.id}`} onChange={(e) => optionOnChange({id:Test.id,answer:e.target.value, correctAnswer:Test.correctans})}></input>{Test.option2}
                                        </div>
                                        <div class="col-3">
                                        <input type="radio" value="option3" name={`'option'${Test.id}`} onChange={(e) => optionOnChange({id:Test.id,answer:e.target.value, correctAnswer:Test.correctans})}></input> {Test.option3}
                                        </div>
                                        <div class="col-3">
                                        <input type="radio" value="option4" name={`'option'${Test.id}`} onChange={(e) => optionOnChange({id:Test.id,answer:e.target.value, correctAnswer:Test.correctans})}></input> {Test.option4}
                                        </div>
                                    </div>  
                                    {/* <div class="row">
                                        <input type="text" name="ans"></input>
                                    </div> */}
                                    
                                    <br></br> 
                                    <br></br>                
                                </h8>
                        )
                    }
                    <br>
                    </br>
              
            <div class="row">
                <div style={{textAlign:"start"}}>

                </div>
                <div style={{textAlign:"end"}}>
                 <button class="btn btn-success" onClick={submiHandle}>Submit</button>
                 </div>
            </div>
            
        </div>
    );
}

export default TakeTestComponent;