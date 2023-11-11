import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequestAccount from "./pages/RequestAccount";

import AccademiStaffSignup from "./pages/AccademiStaffSignup";
import NonAccademiStaffSignup from "./pages/NonAccademiStaffSignup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
       <div>

        <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/home' element={<Home />} />
        <Route path='/RequestAccount' element={<RequestAccount/>}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/AccademiStaffSignup' element={<AccademiStaffSignup/>}/>
        <Route path='/NonAccademiStaffSignup' element={<NonAccademiStaffSignup/>}/>
        
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

