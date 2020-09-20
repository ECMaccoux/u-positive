import React from "react";
import { Container, Row, Col, Form, Button, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function GenerateForm() {
    return <Form className="m-5 w-100">
        <Form.Group controlId="journal-title">
            <Form.Control type="text" placeholder="Title of journal entry"></Form.Control>
        </Form.Group>
        <Form.Group controlId="journal-body">
            <Form.Control as="textarea" rows="10"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="float-right">Submit</Button>
    </Form>
}

export default class NewJournal extends React.Component {
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
                            <Link to={"/dashboard/journal"} className="btn btn-outline-primary upos-nav-btn float-right">All Journals</Link>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <h2 style={{paddingLeft: 10}}>New Journal Entry</h2>
                    </Row>
                    <Row>
                        <GenerateForm />
                    </Row>
                    
                </Container>
            </div>
        )
    }
}