import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Stackl() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Link to="/Home" className="p-2">UOP</Link>
      <Link to="/Login" className="p-2 ms-auto">Login</Link>
      <div className="vr" />
      <Link to="/AccademiStaffSignup" className="p-2">AccademiStaffSignup</Link>
      
    </Stack>
  );
}

export default Stackl;