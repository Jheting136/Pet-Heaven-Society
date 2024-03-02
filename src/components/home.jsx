import React from 'react';
import { Link } from "react-router-dom";
import { CardHeader, Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.css';
import './css/home.css';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item id="carouselItem1">
          <img
            className="d-block mx-auto w-100"
            src="./img/img_hero-01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Welcome to Pet Heaven Society</h1>
            <h3>Adopt don't buy, give them a new forever home.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="carouselItem2">
          <img
            className="d-block mx-auto w-100"
            src="./img/img_hero-02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Welcome to Pet Heaven Society</h1>
            <h3>Show kindness to the kindest souls</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container text-center mt-5">
        <h1>Learn More</h1>
        <i className="bi bi-chevron-compact-down fs-1"></i>
      </div>

      <div className='padded-content'>
        <Row style={{ alignItems: 'stretch' }}>
          <Col sm={12} md={6}>
            <Card style={{ height: '100%' }}s>
                <Card.Header className="bg-green txt-white">
                  What we do
                </Card.Header>
                <Card.Body>
                    We are a non profit organisation that aims to help find fur-ever homes for abandoned pets. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    
                </Card.Body>
                
            </Card>
          </Col>
          <Col sm={12} md={6}>
          <Card>
                <Card.Header className="bg-green txt-white">
                  Adopt don't buy
                </Card.Header>
                <Card.Body>
                  Hundreds of pets get abandoned by owners who no longer want them. Help these innocent souls by adopting                
                </Card.Body>
                <Card.Footer className="bg-green">
                  <Link to={`/FindAFriend`} className="nav-link txt-white">Show me more</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header className="bg-green txt-white" >
                  Rehoming
                </Card.Header>
                <Card.Body>
                    We understand that sometimes you are no longer able to care for your pet. Which is where our rehoming services come in, rest assured that we will find a new fur-ever home for your beloved companion.
                </Card.Body>
                <Card.Footer className="bg-green">
                  <Link to={`/release`} className="nav-link txt-white">Show me more</Link>
                </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
