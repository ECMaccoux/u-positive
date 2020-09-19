import React from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container fluid="md">
                    <br></br>
                    <Row>
                        <h2>Hello, [NAME]!</h2>
                    </Row>
                    <br></br>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card>
                                <Card.Body><h4>Daily Check-In</h4></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card>
                                <Card.Body><h5>Anxiety</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body><h5>Fitness</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card>
                                <Card.Body><h5>Depression</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body><h5>Partner Relationships</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card>
                                <Card.Body><h5>Diet</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body><h5>School</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card>
                                <Card.Body><h5>Water</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body><h5>Work</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card>
                                <Card.Body><h5>Sleep</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body><h5>Period Tracker</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}