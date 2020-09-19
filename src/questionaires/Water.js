import React from "react";
import { Container, Row, Col, Form, Button, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NumericInput from 'react-numeric-input'

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
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
    return <Form className="m-5">
        <Form.Group controlId="waterQ1">
            <Row>
                <Col>
                    <Form.Label>How many cups of water did you drink yesterday?</Form.Label>
                </Col>
                <Col>
                    <NumericInput className="form-control"/>
                </Col>
            </Row>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
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
                    <Row><h4 style={{paddingLeft: 10}}>You drank [AMOUNT] cups of water yesterday.  Good job!</h4></Row>
                    <Row>
                        <ResponsiveContainer width="100%" height={400}>
                            <AreaChart
                                data={data}
                                margin={{
                                top: 25, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#84aed8" fill="#84aed8" />
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