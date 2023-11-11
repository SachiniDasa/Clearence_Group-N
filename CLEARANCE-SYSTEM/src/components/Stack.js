
import Stack from 'react-bootstrap/Stack';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Login from '../pages/Login';
import Signup from "../pages/Signup";



function HorizontalVerticalRulesExample()

{


  return (
   
    <Stack direction="horizontal" gap={3} style={{background:'#B40505'}}>
      <a href="/Dashboard" className="p-2">
      <Button variant="primary">UOP</Button>
      </a>
      
        
      <div className="vr" />
      <div className="p-2 ms-auto">
        <Login/>
      </div>

      <div className="p-2 ms-auto">
        <Signup/>
      </div>
      
      
    </Stack>
  );
}

export default HorizontalVerticalRulesExample;