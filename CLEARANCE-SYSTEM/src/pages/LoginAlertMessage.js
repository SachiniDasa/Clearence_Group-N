import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function LoginAlertMessage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          {/* Add the message within the modal's body */}
          <p>
            Note: This is a Request Account Dashboard, and if you have not
            signed up, please Sign Up first. If you have signed up, go to the
            University GSuite email.
          </p>

          <Container>
            <Form>{/* Your form controls go here */}</Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginAlertMessage;
