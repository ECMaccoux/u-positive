import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


function login() {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    }).then(res => {
        return res.json()
    }).then(res => {
        window.location.href = '/dashboard'
    })
    
    .catch(err => {
        console.log(err)
    })
}

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Container className='section'>
            <Row>
                <Col>
                <h3>U-Positive Login</h3>
                    <Form>
                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Button onClick={e => {login()}}>Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}