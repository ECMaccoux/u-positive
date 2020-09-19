import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
        return <Container className='section mt-5'>
            <Row>
                <Col md='12'>
                <h3 className='text-center'>U-Positive Login</h3>
                <p className='text-center'>Find Yourself.</p>
                    <Form className='mt-5 mx-5'>
                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control></Form.Control>
                            <Form.Text className='ml-auto' style={{textAlignLast: 'end'}}>New User? <Link to='/register'>Create an Account</Link>.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password'></Form.Control>
                            <Form.Text className='ml-auto' style={{textAlignLast: 'end'}}><Link to='/register'>Forgot your Password</Link>.</Form.Text>
                        </Form.Group>
                        <div className='d-flex'>
                        <Button className='ml-auto mt-5' onClick={e => {login()}}>Login</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}