import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import Home from './home';
import usersData from './data/userData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.css';
import './css/navbar.css';

function Navbar() {

    const [showLogin, setShowLogin] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateLogin = (email, password) => {
        const user = usersData.find((user) => user.email === formData.email && user.password === formData.password);

        if (user) {
            // Valid credentials, you can implement your logic here
            console.log('Login successful');
            sessionStorage.setItem('loggedIn', true);
            sessionStorage.setItem('userName', user.fName);
            setLoggedIn(sessionStorage.getItem('loggedIn'));
            console.log(sessionStorage.getItem('loggedIn'));
        } else {
            // Invalid credentials, handle accordingly
            console.log('Invalid credentials');
        }

        handleCloseLogin(); // Close the modal
    };

    const handleLogout = () => {
        // Implement your logout logic here
        sessionStorage.removeItem('loggedIn');
        setLoggedIn(false);
        sessionStorage.removeItem('userName');
    };

    
    const userName = sessionStorage.getItem('userName');

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-green">
                <div className="container-fluid">
                    <a className="navbar-brand txt-white" href="/">
                        <h3>Pet Heaven Society</h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link txt-white" href="/" data-link>
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link txt-white" href="/findAFriend" data-link>
                                    Find a friend
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link txt-white" href="/release" data-link>
                                    Rehoming
                                </a>
                            </li>

                            {/* Conditionally render the login link or the dropdown */}
                            {loggedIn ? (
                                
                                    <NavDropdown className="nav-drop txt-white" title={userName} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.2">
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                       
                            ) : (
                                <li className="nav-item">
                                    <a
                                        className="nav-link txt-white"
                                        href="#"
                                        onClick={handleShowLogin}
                                        data-link
                                    >
                                        Login
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}  
                            />
                        </Form.Group>

                        

                    </Form>
                </Modal.Body>
                <Modal.Footer class="flex-container bg-green">

                                <a
                                    className="nav-link element-1"
                                    href="#"
                                    onClick={validateLogin}
                                    data-link
                                >
                                Login
                                </a>
                            
                                <a
                                    className="nav-link element-2"
                                    href="#"
                                    onClick={() => {handleShowCreate(); handleCloseLogin();}}
                                    data-link
                                >
                                I'm not a member yet
                                </a>
                    
                </Modal.Footer>
            </Modal>

            <Modal show={showCreate} onHide={handleCloseCreate}>
                <Modal.Header closeButton>
                    <Modal.Title>Become a member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col sm={12} md={6}>
                                <Form.Group className="mb-3" controlId="formfName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="fName"
                                    value={formData.fName}
                                    onChange={handleChange} 
                                />
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={6}>
                                <Form.Group className="mb-3" controlId="formlName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter your last name"
                                    name="lName"
                                    value={formData.lName}
                                    onChange={handleChange} 
                                />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}  
                            />
                        </Form.Group>

                        

                    </Form>
                </Modal.Body>
                <Modal.Footer class="flex-container bg-green">

                                <a
                                    className="nav-link element-1"
                                    href="#"
                                    onClick={validateLogin}
                                    data-link
                                >
                                Create account
                                </a>
                            
                                <a
                                    className="nav-link element-2"
                                    href="#"
                                    onClick={() => {handleShowLogin(); handleCloseCreate();}}
                                    data-link
                                >
                                I changed my mind
                                </a>
                    
                </Modal.Footer>
            </Modal>
            
        </div>
    );
}

export default Navbar;
