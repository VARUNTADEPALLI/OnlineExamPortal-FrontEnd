import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TestComponent from './components/TestComponent';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import ViewProfileComponent from './components/ViewProfileComponent';
import StudentHome from './components/StudentHome';
import EditUSerDetailsComponent from './components/EditUSerDetailsComponent';
import CreateTestQuestions from './components/CreateTestQuestions';
import TestDetails from './components/TestDetails';
import UpdateTestDetails from './components/UpdateTestDetails';
import TakeTestComponent from './components/TakeTestComponent';
import AdminHomeComponent from './components/AdminHomeComponent';
import DemoQuizComponent from './components/DemoQuizComponent';
import ForgptPasswordComponent from './components/ForgptPasswordComponent';
import Result from './components/Result';


function App() {
  return (
    
      <Router>
          <Routes>
          <Route  path='/Login' element={<LoginComponent/>}>
            </Route>
            {/* <Route  path='/' element={<DemoQuizComponent/>}>
            </Route> */}
            
            <Route  path='/' element={<RegistrationComponent/>}>
            </Route>
            <Route  path='/ViewTestDetails' element={<TestDetails/>}>
            </Route>
            <Route  path='/Viewprofile' element={<ViewProfileComponent/>}>
            </Route>
            <Route  path='/StudentHome' element={<StudentHome/>}>
            </Route>
            <Route  path='/CreateTest' element={<CreateTestQuestions/>}>
            </Route>
            <Route  path='/UpdateTestDetails' element={<UpdateTestDetails/>}>
            </Route>
            <Route  path='/TakeTest' element={<TakeTestComponent/>}>
            </Route>
            <Route  path='/AdminHome' element={<AdminHomeComponent/>}>
            </Route>
            <Route  path='/EditUserDetails' element={<EditUSerDetailsComponent/>}>
            </Route>
            <Route  path='/forgotPassword' element={<ForgptPasswordComponent/>}>
            </Route>
            <Route  path='/result' element={<Result/>}>
            </Route>
          </Routes>
      
          
         
            

   
             
      </Router>
  

  );
}

export default App;
