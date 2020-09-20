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

    for(let i = 0; i < document.getElementsByName("anxietyQ1-radio").length; i++) {
        if(document.getElementsByName("anxietyQ1-radio")[i].checked) {
            q1Val = i;
        }
    }
    for(let i = 0; i < document.getElementsByName("anxietyQ2-radio").length; i++) {
        if(document.getElementsByName("anxietyQ2-radio")[i].checked) {
            q2Val = i;
        }
    }
    for(let i = 0; i < document.getElementsByName("anxietyQ3-radio").length; i++) {
        if(document.getElementsByName("anxietyQ3-radio")[i].checked) {
            q3Val = i;
        }
    }

    if(q1Val == -1 || q2Val == -1 || q3Val == -1) {
        alert("ERROR: Form not completely filled out");
    }
    else {
        fetch('/api/anxiety', {
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
        alert("Assessment submitted successfully!");
    }
}

function GenerateAssessment() {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    const q1 = [];
    const q2 = [];
    const q3 = [];

    for(const [index, value] of nums.entries()) {
        q1.push(<Form.Check key={index} inline="true" name="anxietyQ1-radio" label={value} type="radio" id={"anxietyQ1-radio-" + value}></Form.Check>)
        q2.push(<Form.Check key={index} inline="true" name="anxietyQ2-radio" label={value} type="radio" id={"anxietyQ2-radio-" + value}></Form.Check>)
        q3.push(<Form.Check key={index} inline="true" name="anxietyQ3-radio" label={value} type="radio" id={"anxietyQ3-radio-" + value}></Form.Check>)
    }

    return <Form className="m-5"  onSubmit={submitForm}>
        <Form.Group controlId="anxietyQ1">
            <Form.Label>How has your anxiety been today?</Form.Label>
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
        <Form.Group controlId="anxietyQ2">
            <Form.Label>How difficult has it been to relax today?</Form.Label>
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
        <Form.Group controlId="anxietyQ3">
            <Form.Label>How worried have you been about the things that make you anxious?</Form.Label>
            <Form.Row>
                <Col md={3}>
                    <Form.Text className="text-muted float-right">Minimal or not at all existent</Form.Text>
                </Col>
                <Col md={6}> 
                    <div className="text-center">
                        {q3}
                    </div>
                </Col>
                <Col md={3}>
                    <Form.Text className="text-muted float-left">Overwhelming</Form.Text>
                </Col>
            </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
}

function formatXAxis(tickItem) {
    return new Date(tickItem).toDateString();
}

export default class Anxiety extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
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
                        <h2 style={{paddingLeft: 10}}>Anxiety</h2>
                    </Row>
                    <Row>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={this.props.anxietyScores}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="dateSubmitted" tickFormatter={formatXAxis}/>
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" name="Overall" dataKey="q1Answer" stroke="#8884d8" />
                                <Line type="monotone" name="Relaxation" dataKey="q2Answer" stroke="#82ca9d" />
                                <Line type="monotone" name="Worry" dataKey="q3Answer" stroke="#cc9081" />
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