import React from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function login(e) {
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
        //console.log(err)
        //console.log(JSON.stringify(err))
        window.location.href = '/login?failed=true'
    })
}

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    renderWelcomeMsg() {
        const query = new URLSearchParams(window.location.search)
        if (query.get('created') === 'true') {
            return <Alert variant='success' className='text-center'>
                Your Account has been successfully created. Please log in.
            </Alert>
        } else if (query.get('failed') === 'true') {
            return <Alert variant='danger' className='text-center'>
                Username or Password is Incorrect
            </Alert>
        }
        else {
            return null
        }
    }

    render() {
        return <Container className='section mt-5'>
            <Row>
                <Col md='12'>
                    {this.renderWelcomeMsg()}
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
                        <Button className='ml-auto mt-5' type='button' onClick={e => {login(e)}}>Login</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}