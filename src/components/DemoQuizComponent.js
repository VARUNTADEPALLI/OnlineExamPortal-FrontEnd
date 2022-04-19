import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function DemoQuizComponent(props) {
    const[TestQ,setTestQ] = useState([]);
    const[currentquestion,setCurrentQuestion] = useState(0);
    const len = TestQ.length;
    useEffect(()=>
    {
        getTestDetails();
    },[])

    const getTestDetails = () =>
    {
        axios.get("http://localhost:9025/getAllTestQuestions")
        .then(response=>setTestQ(response.data));

    }
    console.log(TestQ[1])
// const res=JSON.stringify(TestQ);

    return (
        <div>
            <h1>
                {/* {TestQ[0].id} */}
                {
                    // TestQ[0].map(
                    //     TestQ =>
                    //     <h1>
                    //     {TestQ.id}
                    //     </h1>
                    // )
                }
            </h1>
            

            
          
        </div>
    );
}

export default DemoQuizComponent;