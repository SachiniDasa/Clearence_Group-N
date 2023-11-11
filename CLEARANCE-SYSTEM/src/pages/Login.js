import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginAlert() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username === 'user' && password === 'password') {
      // Successful login
      setIsLoggedIn(true);
      setLoginError('');
      // Close the modal
      handleClose();
    } else {
      // Invalid credentials
      setIsLoggedIn(false);
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{ fontFamily: "times new roman",  color: "black",     textAlign: "center"}}>
        LogIn
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h2 style={{ fontSize: '24px', color: '#333', textAlign: 'center' }}>LogIn</h2>
        </Modal.Header>
        <Form onSubmit={handleLogin}>
          <Modal.Body>
            {loginError && <p className="text-danger">{loginError}</p>}
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
          <Button type="secondary" variant="primary">
              Close
            </Button>
            <Button type="submit" variant="primary">
              Log In
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default LoginAlert;
