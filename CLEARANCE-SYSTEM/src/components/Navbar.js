import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Login from '../pages/Login';
import Signup from '../pages/Signup';



function Bar() {
  return (
    <Navbar bg="" expand="lg" className="p-2" style={{backgroundColor:"#B40505"}}>
      <div className="container">
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>University of Peradeniya</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>Dashboard</Nav.Link>
            <NavDropdown title="Department" id="basic-nav-dropdown" style={{ fontFamily: "times new roman", color: "goldenrod", textAlign: "center" }}>
              <NavDropdown.Item href="/CS">Department of Computer Science & Statistics</NavDropdown.Item>
              <NavDropdown.Item href="/Zoo">Department of Zology</NavDropdown.Item>
              <NavDropdown.Item href="/Botny">Department of Biology</NavDropdown.Item>
              <NavDropdown.Item href="/Physics">Department of Physics</NavDropdown.Item>
              <NavDropdown.Item href="/Chemistry">Department of Chemistry</NavDropdown.Item>
              <NavDropdown.Item href="/Maths">Department of Mathematics</NavDropdown.Item>
              <NavDropdown.Item href="/Geology">Department of Geology</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Department of Micro Biology</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Science Library</NavDropdown.Item>
              <NavDropdown.Item href="/Gymnasium">Gymnasium</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Accomadation</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>ContactUs</Nav.Link>
            <Nav.Link href="/" className="nav-link" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>AboutUs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <div className="mx-1"></div>
            <Button variant="primary" style={{color:"black"}} >Search</Button>
            
          </Form>
          <Button variant="" size='sm'  className="mx-1" style={{color:"black", backgroundColor:"#B40505"}}>
        <Login/>        </Button>
          <Button variant="" size="sm " className="mx-1" style={{color:"black", backgroundColor:"#B40505"}}>
        <Signup/>       </Button>
          <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{}} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Bar;
