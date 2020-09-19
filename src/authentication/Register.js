import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function submitData() {
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            dob: document.getElementById('dob').value,
            password1: document.getElementById('password1').value,
            password2: document.getElementById('password2').value,
            tac: document.getElementById('tac').value
        })
    })
    .then(res => res.json())
    .then(res => {console.log('successfully created account: ' + res.toString())})
    .catch(err => console.log('An unexpected error occurred: ' + err))
}

export default class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Container className='section'>
            <Row>
                <Col md='6'>
                <h1 className='ml-5 mt-3'>Register for U-Positive</h1>
                <p className='ml-5 mt-3'>Find Yourself.</p>
                <Form className='m-5'>
                
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email'></Form.Control>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId='firstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='lastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId='dob'>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type='date'></Form.Control>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} controlId='password1'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId='password2'>
                        <Form.Label>Re-Enter Password</Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId='tac' className='d-flex flex-reverse'>
                    <Form.Check></Form.Check>
                        <Form.Label>Agree to Terms and Conditions</Form.Label>
                    </Form.Group>
                    <Button onClick={e => {submitData()}}>Create Account</Button>
                    <Link to={"/"} className="btn">Cancel</Link>   
                    </Form>
                           
                </Col>
                <Col md='6' style={{alignSelf: 'center', display: 'flex'}}>
                    <img src='/img/MainLogo1000px.png' width='50%' className='m-auto'></img>
                </Col>
            </Row>
        </Container>
    }
}