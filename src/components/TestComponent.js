import React, { Component } from 'react';
import  axios from 'axios';


class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test:[]
        };

    }

    componentDidMount() {
        axios.get("http://localhost:9051/getAllTestQuestions")
        .then(response => response.data)
        .then((data)=>{
            this.setState({test:data})
        });
        }
    


    
    render() {
        return (
            <div>
            <h1 className='text-center'> User Details</h1>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>question</td>
                        <td>option1</td>
                        <td>option2</td>
                        <td>option3</td>
                        <td>option4</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.test.map(
                            test =>
                                <tr key={test.id}>
                                    <td>{test.id}</td>
                                    <td>{test.question}</td>
                                    <td>{test.option1}</td>
                                    <td>{test.option2}</td>
                                    <td>{test.option3}</td>
                                    <td>{test.option4}</td>
                                    
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        );
    }
}


export default TestComponent;