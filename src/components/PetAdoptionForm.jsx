import React, { useEffect, useState } from "react";
import { getPetById } from "../services/petService";
import { useParams } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { postAdoption } from "../services/adoptionService";

export function PetAdoptionForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { id } = useParams();
    const [pet, setPet] = useState(null);
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

    

    useEffect(() => {
        if (id !== undefined) {
            getPetById(Number(id)).then((pet) => { setPet(pet) });
            console.log(pet);
        }
    }, [id]);

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
        <div id="padded-content" className="PetAdoptionForm">
            {pet ? (
        <div style={{width: 100 + '%'}}>
        <div className="container text-center mt-5">
          <h1>Bring {pet.name} home</h1>
          <i className="bi bi-chevron-compact-down fs-1"></i>
        </div>
            <Row>
                    {formSubmitted ? <Alert>One of our team members will get back with you as soon as possible, thanks!</Alert> :
                        <Form onSubmit={onSubmit}>
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

                            <Form.Group controlId="aboutSelf">
                                <Form.Label>About Yourself</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="aboutSelf"
                                    value={formValues.aboutSelf}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            {pet?.animalType === 'dog' && (
                                <Form.Check
                                    type="checkbox"
                                    id="hasFencedYard"
                                    label="Do you have a fenced yard?"
                                    name="hasFencedYard"
                                    checked={formValues.hasFencedYard}
                                    onChange={handleChange}
                                />
                            )}

                            <Form.Check
                                type="checkbox"
                                id="hasChildren"
                                label="Do you have children?"
                                name="hasChildren"
                                checked={formValues.hasChildren}
                                onChange={handleChange}
                            />

                            <Form.Check
                                type="checkbox"
                                id="hasOtherPets"
                                label="Do you have other pets?"
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
        </div> ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
