import React from "react";
import { Card } from "react-bootstrap";
import '../components/css/petcard.css';
import { Link } from "react-router-dom";

export function PetCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={`img/${props.pet.image}`} />
            <Card.Body>
                <Card.Title>{props.pet.name} |  {props.pet.isBoy ? 'Boy' : 'Girl'}  |  {props.pet.breed}  |</Card.Title>
                {props.pet.description}
            </Card.Body>
            <Card.Footer className="bg-green">
                <Link to={`/details/${props.pet.id}`} className="nav-link txt-white">Get to know me !</Link>
            </Card.Footer>
        </Card>
    );
}
