import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import AboutUs from "../components/AboutUs";
import Login from "./Login";
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Signup from "./Signup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faCalendarAlt, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';



function Dashboard(){
    const containerStyle = {
            backgroundColor: 'white',
            minHeight: '10vh'
            
             
      };

      const pageStyles = {
        backgroundColor: 'white',
        minHeight: '100vh'
      };

      const navStyle = {
        backgroundColor: '#B40505'
      };

      const cardStyle = {
        width: '18rem',
        backgroundColor: 'white',
        minHeight: '40vh',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transform: 'perspective(1000px) ',
        width: '18rem', 
        color:'back', 
        backgroundColor: "white" ,
        minHeight: '40vh'
      };
      
    return(
        
        <div style={pageStyles}>
    <Navbar bg="blue" expand="lg" className="p-2" style={{backgroundColor: "#B40505"}} >
      <div className="container">
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>University of Peradeniya Clearnce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <div className="mx-1"></div>
            <Button variant="primary" size="sm" style={{color:"black",}}>Search</Button>
          </Form>
          <Button variant="outline"  className="mx-1" size="sm" style={{color:"black",backgroundColor: "#B40505" }}>   <Login/>      </Button>
          <Button variant="" className="mx-1" size="sm" style={{color:"black",}}>   <Signup/>      </Button>
          <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{ '--switch-track-color': 'red', '--switch-thumb-color': 'black',
            }}  />
        </Navbar.Collapse>
          </div>
            </Navbar>
             
            <br/>
            <br/>
               <Container style={containerStyle}>
                <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">
                  <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                    <Card style={cardStyle}>
                      <Card.Body className="text-center">
                        <Card.Title>Home page</Card.Title>
                        <br />
                        <Card.Text>
                          <FontAwesomeIcon icon={faHome} style={{ fontSize: 120 }} />
                        </Card.Text>
                        <a href="/Home">
                          <Button variant="primary" style={{color:"black"}}>Click Me</Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Request Account</Card.Title>
                      <br/>
                      <Card.Text>
                        <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 120 }} />
                      </Card.Text>
                      <a href="/RequestAccount">
                        <Button variant="primary" style={{color:"black"}}>Click Me</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Login Interface</Card.Title>
                      <br/>
                      <Card.Text>
                        <FontAwesomeIcon icon={faSignInAlt} style={{ fontSize: 120 }} />
                      </Card.Text>
                      <div className="p-2 ms-auto">
                        <Login />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row md={6} className="className=d-flex align-items-center justify-content-center p-1">
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Account Renew</Card.Title>
                      <br/>
                      <Card.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: 120 }} />
                      </Card.Text>
                      <Button variant="primary" style={{color:"black"}}>Click Me</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Payment Gate</Card.Title>
                      <br/>
                      <Card.Text>
                        <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: 120 }} />
                      </Card.Text>
                      <Button variant="primary" style={{color:"black"}} > Click Me</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="className=d-flex align-items-center justify-content-center p-1">
                  <Card style={cardStyle}>
                    <Card.Body className="text-center">
                      <Card.Title>Admin Support</Card.Title>
                      <br/>
                      <Card.Text>
                        <FontAwesomeIcon icon={faHeadset} style={{ fontSize: 120 }} />
                      </Card.Text>
                      <Button variant="primary" style={{color:"black"}}>Click Me</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <br/>

            
    
        <footer style={{ background: "#B40505", padding: '10px' }}>
                    <Container>
                    <Row>
                        <Col md={6}>
                        <p style={{color:"#FFC53A"}}>&copy; {new Date().getFullYear()} Your Company Name</p>
                        </Col>
                        <Col md={6} className="text-right">
                        <p  style={{color:"#FFC53A"}}>Contact: contact@example.com</p>
                        </Col>
                    </Row>
                    </Container>
                </footer>
              
            </div>

    );
}

export default Dashboard;