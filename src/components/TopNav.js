import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'

export default class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar bg="light" sticky="top" expand="md">
                <Nav className="container-fluid">
                    <Nav.Item>
                        <Navbar.Brand href="#home">U+</Navbar.Brand>
                    </Nav.Item>
                    <Nav.Item className="ml-auto">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                            <Button variant="primary">Sign Up</Button>
                            <Button variant="primary">Log In</Button>
                        </Navbar.Collapse>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}