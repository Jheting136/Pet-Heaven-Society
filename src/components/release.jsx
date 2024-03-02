import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { postAdoption } from "../services/adoptionService";

export function Release() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        hasFencedYard: false,
        hasChildren: false,
        hasOtherPets: false,
        phoneNumber: '',
        email: '',
        aboutSelf: ''
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormValues(prev => ({
                ...prev,
                [name]: e.target.checked
            }));
        }
        else {
            setFormValues(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        postAdoption(formValues);
        setFormSubmitted(true);
    }

    return (
        <div id="padded-content">
        <div style={{width: 100 + '%'}}>
        <div className="container text-center mt-5">
          <h1>Rehome your pet</h1>
          <i className="bi bi-chevron-compact-down fs-1"></i>
        </div>
        <div  className="Release">
            <Row>
                
                
                    {formSubmitted ? <Alert>One of our team members will get back with you as soon as possible, thanks!</Alert> :
                        <Form onSubmit={onSubmit}>
                            <h6>Some Info About Yourself</h6>
                            <hr />
                            <Row>
                            <Col sm={12} md={4}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formValues.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={4}>
                                <Form.Group controlId="middleName">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="middleName"
                                        value={formValues.middleName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={4}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formValues.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phoneNumber"
                                    value={formValues.phoneNumber}
                                    onChange={handleChange}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder="123-456-7890"
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    pattern="\S+@\S+\.\S+"
                                />
                            </Form.Group> 
                            <br />

                            <h6>Some Info About Your Pet</h6>
                            <hr />
                            <Form.Group controlId="petName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="petName"
                                    value={formValues.petName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Row>
                                <Col sm={12} md={4}>
                                    <Form.Group controlId="petType">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="petType"
                                            value={formValues.petType}
                                            placeholder="Cat | Dog | Rabbit | etc"
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={4}>
                                    <Form.Group controlId="petBreed">
                                        <Form.Label>Breed</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="petBreed"
                                            value={formValues.petBreed}
                                            placeholder="Animal's Breed"
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={4}>
                                    <Form.Group controlId="petAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="petAge"
                                            value={formValues.petAge}
                                            
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="aboutSelf">
                                <Form.Label>Please attach clear photo(s)/video(s) of your pet</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="aboutSelf"
                                    onChange={(e) => handleChange({ target: { name: "aboutSelf", value: e.target.files[0] } })}
                                />
                            </Form.Group>
                            <Form.Group controlId="aboutSelf">
                                <Form.Label>Please attach vaccination/health records of your pet</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="aboutSelf"
                                    onChange={(e) => handleChange({ target: { name: "aboutSelf", value: e.target.files[0] } })}
                                />
                            </Form.Group>

                            <Row>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="aboutSelf">
                                        <Form.Label>What's Your Pet's Personality Like</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="aboutSelf"
                                            value={formValues.aboutSelf}
                                            placeholder="Likes and Dislikes, Quirks, etc"
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Group controlId="aboutSelf">
                                        <Form.Label>What's Your Reason(s) For Rehoming</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="aboutSelf"
                                            value={formValues.aboutSelf}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Row>
                                <h7>Is Your Pet Trained ?</h7>
                                <Col sm={12} md={1}>
                                    <Form.Check
                                        type="radio"
                                        id="isTrained"
                                        label="Yes"
                                        name="isTrained"
                                        checked={formValues.isTrained}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={12} md={1}>
                                    <Form.Check
                                        type="radio"
                                        id="isTrained"
                                        label="No"
                                        name="isTrained"
                                        checked={formValues.isTrained}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                            
                            <br />

                            <h6>Disclaimer and Submit</h6>
                            <hr />
                            <Form.Check
                                type="checkbox"
                                id="hasOtherPets"
                                label="I agree that my data is stored and collected."
                                name="hasOtherPets"
                                checked={formValues.hasOtherPets}
                                onChange={handleChange}
                            />
                            <br />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        </Form>
                    }
            </Row>
        </div>
        </div>
        </div>
    );
}
