import React from "react";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

export default class ListView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container fluid="md">
                    <br></br>
                    <Row style={{paddingBottom: 10}}>
                        <h2>Hello, [NAME]!</h2>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={"/dashboard"} className="btn btn-outline-primary upos-nav-btn active">List View</Link>
                            <Link to={"/dashboard/graph"} className="btn btn-outline-primary upos-nav-btn">Graph View</Link>
                        </Col>
                        <Col>
                            <Link to={"/dashboard/journal"} className="btn btn-outline-primary upos-nav-btn float-right">All Journals</Link>
                        </Col>
                    </Row>
                    <br></br>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h4>Daily Check-In</h4></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <LinkContainer to={"/dashboard/anxiety"}>
                                <Card className="upos-dash-card">
                                    <Card.Body><h5>Anxiety</h5></Card.Body>
                                </Card>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Fitness</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Depression</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Partner Relationships</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Diet</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>School</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Water</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Work</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="upos-dash-row">
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Sleep</h5></Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="upos-dash-card">
                                <Card.Body><h5>Period Tracker</h5></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}