import React from "react";
import { Container, Row, Col, Form, Button, Card, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ListView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container fluid="sm" className='section'>
                    <Row style={{paddingBottom: 10}}>
                        <Col>
                            <h2 style={{paddingLeft: 10}}>Hello, {this.props.myInfo.firstName}!</h2>
                        </Col>
                        <Col>
                            <Link to={"/dashboard/journal/new"} className="btn btn-primary upos-nav-btn float-right">New Journal</Link>
                            <Link to={"/dashboard/journal"} className="btn btn-outline-primary upos-nav-btn float-right">All Journals</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p className='text-center'>Welcome to U Positive, a way to keep track of yourself. Go ahead and log a journal, or take one of our surveys. All information that you enter on the site is only viewable by you and site administrators.</p></Col>
                    </Row>
                    <Row> 
                        {/*<Col>
                            <Link to={"/dashboard"} className="btn btn-outline-primary upos-nav-btn active">List View</Link>
                            <Link to={"/dashboard/graph"} className="btn btn-outline-primary upos-nav-btn">Graph View</Link>
                        </Col>*/}
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Row>
                                
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <Link to={"/dashboard/anxiety"} style={{ textDecoration: 'none', color: "black"}}>
                                <Card className="upos-dash-card">
                                    <Card.Body><h5>Anxiety</h5></Card.Body>
                                </Card>
                            </Link>
                            <Link to={"/dashboard/depression"} style={{ textDecoration: 'none', color: "black"}}>
                                <Card className="upos-dash-card">
                                    <Card.Body><h5>Depression</h5></Card.Body>
                                </Card>
                            </Link>
                            <Link to={"/dashboard/water"} style={{ textDecoration: 'none', color: "black"}}>
                                <Card className="upos-dash-card">
                                    <Card.Body><h5>Water</h5></Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col sm={3}>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}