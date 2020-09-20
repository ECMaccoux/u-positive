import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

function GenerateAssessment() {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    const q1 = [];
    const q2 = [];
    const q3 = [];

    for(const [index, value] of nums.entries()) {
        q1.push(<Form.Check key={index} inline="true" name="depressionQ1-radio" label={value} type="radio" id={"depressionQ1-radio-" + value}></Form.Check>)
        q2.push(<Form.Check key={index} inline="true" name="depressionQ2-radio" label={value} type="radio" id={"depressionQ2-radio-" + value}></Form.Check>)
        q3.push(<Form.Check key={index} inline="true" name="depressionQ3-radio" label={value} type="radio" id={"depressionQ3-radio-" + value}></Form.Check>)
    }

    return <Form className="m-5">
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
        <Form.Group controlId="depressionQ4">
            <Form.Label>Have you been having any thoughts on self-harm?</Form.Label>
            <Form.Row>
                <Form.Check inline="true" type="radio" name="depressionQ4-radio" label="Yes" id="depressionQ4-radio-yes"></Form.Check>
                <Form.Check inline="true" type="radio" name="depressionQ4-radio" label="No" id="depressionQ4-radio-no"></Form.Check>
            </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
}

export default class Depression extends React.Component {
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
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <h2 style={{paddingLeft: 10}}>Depression</h2>
                    </Row>
                    <Row>
                        <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            data={data}
                            margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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