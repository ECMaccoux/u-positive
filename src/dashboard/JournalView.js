import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class JournalView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <br></br>
                <Container fluid="md" className="section">
                    <Row>
                        <Col>
                            <Link to={"/dashboard"} className="btn btn-outline-primary upos-nav-btn">Back</Link>
                        </Col>
                        <Col>
                            <Link to={"/dashboard/journal/new"} className="btn btn-primary upos-nav-btn float-right">New Journal</Link>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <h2 style={{paddingLeft: 10}}>All Journals</h2>
                    </Row>
                </Container>
            </div>
        )
    }
}