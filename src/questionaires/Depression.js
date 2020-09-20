import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

function submitForm() {
    var q1Val = -1;
    var q2Val = -1;
    var q3Val = -1;

    for(let i = 0; i < document.getElementsByName("depressionQ1-radio").length; i++) {
        if(document.getElementsByName("depressionQ1-radio")[i].checked) {
            q1Val = i;
        }
    }
    for(let i = 0; i < document.getElementsByName("depressionQ2-radio").length; i++) {
        if(document.getElementsByName("depressionQ2-radio")[i].checked) {
            q2Val = i;
        }
    }
    for(let i = 0; i < document.getElementsByName("depressionQ3-radio").length; i++) {
        if(document.getElementsByName("depressionQ3-radio")[i].checked) {
            q3Val = i;
        }
    }

    if(q1Val == -1 || q2Val == -1 || q3Val == -1) {
        alert("ERROR: Form not completely filled out");
    }
    else {
        fetch('/api/depression', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q1Answer: q1Val,
                q2Answer: q2Val,
                q3Answer: q3Val
            })
        })
    }
    
}

function GenerateAssessment() {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    const q1 = [];
    const q2 = [];
    const q3 = [];

    for(let i = 0; i < 9; i++) {
        q1.push(<Form.Check key={i} value={i} inline="true" name="depressionQ1-radio" label={i} type="radio" id={"depressionQ1-radio-" + i}></Form.Check>)
        q2.push(<Form.Check key={i} value={i} inline="true" name="depressionQ2-radio" label={i} type="radio" id={"depressionQ2-radio-" + i}></Form.Check>)
        q3.push(<Form.Check key={i} value={i} inline="true" name="depressionQ3-radio" label={i} type="radio" id={"depressionQ3-radio-" + i}></Form.Check>)
    }

    return <Form className="m-5" onSubmit={submitForm}>
        <Form.Group controlId="depressionQ1">
            <Form.Label>Overall, how has your depression been?</Form.Label>
            <Form.Row>
                <Col md={3}>
                    <Form.Text className="text-muted float-right">Minimal or not at all existent</Form.Text>
                </Col>
                <Col md={6}> 
                    <div className="text-center">
                        {q1}
                    </div>
                </Col>
                <Col md={3}>
                    <Form.Text className="text-muted float-left">Overwhelming</Form.Text>
                </Col>
            </Form.Row>
        </Form.Group>
        <Form.Group controlId="depressionQ2">
            <Form.Label>Have you been having difficulty feeling interested in things, concentrating, or accomplishing tasks?</Form.Label>
            <Form.Row>
                <Col md={3}>
                    <Form.Text className="text-muted float-right">Extremely easy</Form.Text>
                </Col>
                <Col md={6}> 
                    <div className="text-center">
                        {q2}
                    </div>
                </Col>
                <Col md={3}>
                    <Form.Text className="text-muted float-left">Extremely difficult</Form.Text>
                </Col>
            </Form.Row>
        </Form.Group>
        <Form.Group controlId="depressionQ3">
            <Form.Label>Has it been challenging to take care of your basic needs like food, water, and rest?</Form.Label>
            <Form.Row>
                <Col md={3}>
                    <Form.Text className="text-muted float-right">Extremely easy</Form.Text>
                </Col>
                <Col md={6}> 
                    <div className="text-center">
                        {q3}
                    </div>
                </Col>
                <Col md={3}>
                    <Form.Text className="text-muted float-left">Extremely challenging</Form.Text>
                </Col>
            </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
}

function formatXAxis(tickItem) {
    return new Date(tickItem).toDateString();
}

export default class Depression extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            q1Radio: {},
            q2Radio: {},
            q3Radio: {}
        }
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
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <h2 style={{paddingLeft: 10}}>Depression</h2>
                    </Row>
                    <Row>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={this.props.depressionScores}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="dateSubmitted" tickFormatter={formatXAxis} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" name="Overall" dataKey="q1Answer" stroke="#8884d8" />
                                <Line type="monotone" name="General Interest" dataKey="q2Answer" stroke="#82ca9d" />
                                <Line type="monotone" name="Basic Needs" dataKey="q3Answer" stroke="#cc9081" />
                                <Line type="monotone" name="Daily Average" dataKey="averageToday" stroke="#ccc381" />
                            </LineChart>
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