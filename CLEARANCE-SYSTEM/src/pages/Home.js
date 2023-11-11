import React from "react";
import Navbar from "../components/Navbar";

import Image from "../components/Image";
import AboutUs from "../components/AboutUs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";



function Home() {
  const rowStyle = {
    padding: "10px",
  };
  const pageStyles = {
    backgroundColor: "white",
    minHeight: "100vh",
  };
  const containerStyle = {
    backgroundColor: "blue",
  };

  return (
    <div style={pageStyles}>
     
      <header>
        <Navbar/>
      </header>

      <Row style={{ backgroundColor: "#B40505" }}>
        <h1
          style={{
            fontFamily: "times new roman",
            color: "#FFC53A",
            textAlign: "center",
            border: "2px solid",
          }}
        >
          University Of Peradeniya Faculty Of Science <br />
          Clearnce System
        </h1>
      </Row>

      <Row>
       
        <hr />
      </Row>
      <Container>
        <Row>
          <Image />
        </Row>
      </Container>
      <Row style={rowStyle}></Row>
      <Row style={rowStyle}></Row>
      <Row style={rowStyle}></Row>

      <div style={{ backgroundColor: "#B40505" }}>
        <Container>
          <br />
          <Row>
            <Col>
              <Card style={{ width: "18rem", background: "#fd7e14" }}>
                
                <Card.Body>
                  <Card.Title>Notice Board</Card.Title>
                  <Card.Text>Special notices about the Clearnce</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> </Col>

            <Col>
              <Card style={{ width: "18rem", background: "#fd7e14" }}>
              
                <Card.Body>
                  <Card.Title>Quick Link</Card.Title>
                  <Card.Text>Downloard the report</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> </Col>

            <Col>
              <Card style={{ width: "18rem", background: "#fd7e14" }}>
                
                <Card.Body>
                  <Card.Title>Quick Link</Card.Title>
                  <Card.Text>Online Payment</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={rowStyle}></Row>
          <Row style={rowStyle}></Row>
          <Row style={rowStyle}></Row>
          <Row style={rowStyle}></Row>
        </Container>
      </div>

      <AboutUs />
      
      
        <footer style={{ background: "#B40505" , padding: "10px" }}>
         
            <Row>
              <Col md={6}>
                <p style={{ ontFamily: "times new roman",  color: "#FFC53A"}}>&copy; {new Date().getFullYear()} Faculty Clearnce System</p>
              </Col>
              <Col md={6} className="text-right">
                <p style={{ ontFamily: "times new roman",  color: "#FFC53A"}}>Contact: contact@example.com</p>
              </Col>
            </Row>
          
        </footer>
      
    </div>
  );
}

export default Home;
