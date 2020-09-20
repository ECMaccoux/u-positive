import React from "react";
import { Container, Row, Col, Form, Button, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NumericInput from 'react-numeric-input'

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

function submitForm() {
    var numCups = document.getElementById("numCups").value;
    if(isNaN(numCups) || numCups == null) {
        alert("ERROR: Form not filled out with a valid number");
    }
    else {
        fetch('/api/water', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                waterQuantity: numCups
            })
        })
    }
}

function GenerateAssessment() {
    return <Form className="m-5" onSubmit={submitForm}>
        <Form.Group controlId="waterQ1">
            <Row>
                <Col>
                    <Form.Label>How many cups of water did you drink yesterday?</Form.Label>
                </Col>
                <Col>
                    <NumericInput className="form-control" id="numCups"/>
                </Col>
            </Row>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
}

function formatXAxis(tickItem) {
    return new Date(tickItem).toDateString();
}

export default class Water extends React.Component {
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
                            <Link to={"/dashboard/journal"} className="btn btn-outline-primary upos-nav-btn float-right">All Journals</Link>
                            <Button variant="outline-primary" id="btnToggleFeedback" className="float-right">Toggle Feedback</Button>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <h2 style={{paddingLeft: 10}}>Water</h2>
                    </Row>
                    <Row>
                        <ResponsiveContainer width="100%" height={400}>
                            <AreaChart
                                data={this.props.water}
                                margin={{
                                top: 25, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="dateSubmitted" tickFormatter={formatXAxis}/>
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="waterQuantity" stroke="#84aed8" fill="#84aed8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Row>
                    <br></br>
                    <Row>
                        <h4 style={{paddingLeft: 10}}>Daily Assessment</h4>
                    </Row>
                    <Row>
                        <Col>
                            <GenerateAssessment />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}