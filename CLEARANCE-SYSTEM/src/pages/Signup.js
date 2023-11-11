import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{ fontFamily: "times new roman",  color: "black",     textAlign: "center"}}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Student Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Contact Number"
                />
              </Form.Group>

              <Form.Label>Select Your Combination</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select your Combination</option>
                <option value="1">Bachelor of Science Study Programme</option>
                <option value="2">
                  Bachelor of Science Honours Study Programme
                </option>
                <option value="3">
                  Bachelor of Science Honours in Statistics and Operations
                  Research (SOR) Study Programme
                </option>
                <option value="4">
                  Bachelor of Science Honours in Computation and Management (CM)
                  Study Programme
                </option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="This is correct details" />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;
