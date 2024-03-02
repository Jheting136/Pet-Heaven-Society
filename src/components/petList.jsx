import React, { useEffect, useState } from "react";
import { getPets } from "../services/petService";
import { Col, Row } from "react-bootstrap";
import { PetCard } from "./PetCard";

export function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPets().then((pets) => setPets(pets));
    }, []);

    return (
        <div className="PetList">
            <Row>
                {pets.map((pet, index) => (
                    <Col key={index} lg={4}>
                        <PetCard pet={pet} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
