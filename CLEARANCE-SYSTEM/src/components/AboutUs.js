import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img4 from '../Images/b01.jpg'; 

const backgroundImageStyle = {
  backgroundImage: `url(${Img4})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '60vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const transparentCardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  minHeight: '50vh',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function AboutUs() {
  return (
    <div style={backgroundImageStyle}>
      <Row style={{ alignItems: 'center' }}>
        

        <Col md={4} style={{ alignItems: 'center' }}>
          <Card style={transparentCardStyle}>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>xxxxx</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} style={{ alignItems: 'center' }}>
          <Card style={transparentCardStyle}>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>xxxxx</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={transparentCardStyle}>
            <Card.Body>
              <Card.Title>The Team</Card.Title>
              <Card.Text>xxxxx</Card.Text>
            </Card.Body>
          </Card>
        </Col>

       
      </Row>
    </div>
  );
}

export default AboutUs;
