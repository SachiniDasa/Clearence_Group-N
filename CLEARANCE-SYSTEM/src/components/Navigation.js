
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';




export default function Navigation() {
  const navStyle = {
    backgroundColor: '#EA5252'
  };
  return (
     
  <div>
    
    <Navbar expand="lg"  className="bg-body-tertiary justify-content-between"   style={navStyle}>
    <Container>
      <Col md={2.5}>
      <Navbar.Brand href="#Home">University OF Peradeniya</Navbar.Brand>
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
          <Col md={1}>
          <NavDropdown title="DropDown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><a href="/CS">Department of Computer Science & Statistics</a></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><a href="/Zoo">Department of Zoo </a> </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><a href="/Botny">Department of Botny</a></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Department of Physics </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Department of Chemistry</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Department of Maths</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Department of Geology </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.8">Department of Micro Biology</NavDropdown.Item>
            <NavDropdown.Divider /> <NavDropdown.Item href="#action/3.9"> Science Library  </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Sport Councile </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Accomadation </NavDropdown.Item>
          </NavDropdown>
          </Col>
        </Nav>

        <Nav className="ml-auto">
          <Form inline >
            <Form.Group>
            <Col onMouseDown={6.5}>
            <Form.Control   type="text"  placeholder="Search" className=" mr-sm-2" />
            </Col>
            <Col md={2}>
            <Button variant='outline-success'>Search</Button>
            </Col>
            </Form.Group>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  </div>

  );
}

  
 
