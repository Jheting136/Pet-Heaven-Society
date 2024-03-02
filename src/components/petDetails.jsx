import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPetById } from "../services/petService";
import { Card, Col, Row } from "react-bootstrap";

import '../components/css/petDetail.css';

export function PetDetails() {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    console.log(id);

    useEffect(() => {
        if (id !== undefined) {
            console.log("id is not undefined");
            getPetById(Number(id)).then((pet) => { setPet(pet) });
        }
    }, [id]);

    return (
        
        <div className="PetDetails">
            {pet &&
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                        <img className="detailImg" src={`/img/${pet.image}`} alt={pet.name} />
                                    </Col>
                                    <Col lg={8}>
                                        <Card.Title>{pet.name}</Card.Title>
                                        <Card.Text>{pet.breed} - {pet.isBoy ? 'Boy' : 'Girl'}</Card.Text>
                                        <Card.Title>Introduction</Card.Title>
                                        <Card.Text>{pet.description}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-green">
                                <Link to={`/adoptions/${id}`} className="nav-link txt-white">Take me home !</Link>
                            </Card.Footer>  
                        </Card>
                    </Col>
                    <Col lg={2}></Col>
                </Row>}
        </div>
    );
}
