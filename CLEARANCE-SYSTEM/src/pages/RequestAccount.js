import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AccademiStaffSignup from "../pages/AccademiStaffSignup";
import NonAccademiStaffSignup from "../pages/NonAccademiStaffSignup";
import Alert from "react-bootstrap/Alert";
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faSignInAlt, faCalendarAlt, faCreditCard, faHeadset } from '@fortawesome/free-solid-svg-icons';

function RequestAccount() {
  const containerStyle = {
    backgroundColor: "#F9C449",

    minHeight: "10vh",
  };

  const pageStyles = {
    
    minHeight: "80vh",
  };

 

  const textStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "20px",
    lineHeight: "1.5",
    textAlign: "center",
    marginTop: "20px",
  };
  const rowStyle = {
    padding: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  return (
    <div style={pageStyles}>
    <header>
    <Navbar bg="blue" expand="lg" className="p-2" style={{backgroundColor: "#B40505"}} >
      <div className="container">
        <Navbar.Brand href="/Home" style={{ fontFamily: "times new roman", color: "#FFC53A", textAlign: "center",}}>University of Peradeniya </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            
          </Nav>
          <Form className="d-flex">
            <FormControl type="text"  className="mr-2" />
            <div className="mx-2"></div>
            <Button variant="primary" size="sm" style={{ color: "black" }}>
             Search
            </Button>
          </Form>
          <div className="mx-2"></div>
          <Form.Check type="switch" id="flexSwitchCheckDefault" label="DarkMode" style={{ '--switch-track-color': 'red', '--switch-thumb-color': 'black',
  }}  />
        </Navbar.Collapse>
      </div>
    </Navbar>
    </header>

      <br />

      <Container style={containerStyle}>
        <Row>
          <Col style={{color:"#B40505"}}>
            {" "}
            <p style={textStyle}>
              Note : This is a Request Account Dashboard and if will not Signup
              plese Signup First.If you Sign Up go to University GSuite email
              Click to...
              <br />
              <div className="p-2 ms-auto">
                <Login />
              </div>
              .<br />{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row style={rowStyle}>
          
        </Row>
      </Container>

        <Row
          md={6}
          className="className=d-flex align-items-center justify-content-center p-1"
        >
          
          <Col md={3}
         
            className="className=d-flex align-items-center justify-content-center p-1"
          >
            <Card
              style={cardStyle}
            >
              <Card.Body className="text-center">
                <Card.Title>ACCEDEMIC STAFF SIGNUP </Card.Title>
                <br/>
                <Card.Text>
                        <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 120 }} />
                      </Card.Text>
                

                <div className="p-2 ms-auto">
                  <AccademiStaffSignup />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}
         
            className="className=d-flex align-items-center justify-content-center p-1"
          >
            <Card
              style={cardStyle}
            >
              <Card.Body className="text-center">
                <Card.Title>NON ACCEDEMIC STAFF SIGNUP</Card.Title>
                <br/>
                <Card.Text>
                        <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 120 }} />
                      </Card.Text>
                <div className="p-2 ms-auto">
                  <NonAccademiStaffSignup />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}
            
            className="className=d-flex align-items-center justify-content-center p-1"
          >
            <Card
              style={cardStyle}
            >
              <Card.Body className="text-center">
                <Card.Title>STUDENT SIGNUP</Card.Title> 
                <br/>
                <Card.Text>
                        <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 120 }} />
                      </Card.Text>
                <div className="p-2 ms-auto">
                  <Signup />
                </div>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      

      <div>
        <br />
        <br />
        <br />
        <br />

        <footer style={{ backgroundColor: "#B40505", padding: "10px" }}>
          <Container>
            <Row>
              <Col md={6}>
                <p style={{color: "#FFC53A"}}>&copy; {new Date().getFullYear()} Your Company Name</p>
              </Col>
              <Col md={6} className="text-right">
                <p style={{color: "#FFC53A"}}>Contact: contact@example.com</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default RequestAccount;
