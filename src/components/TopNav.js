import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'

export default class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                <Nav className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                    <Navbar.Brand href="#home">U+</Navbar.Brand>
                    <Nav.Item>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Button variant="primary" className="upos-nav-btn">Sign Up</Button>
                            <Button variant="primary" className="upos-nav-btn">Log In</Button>
                        </Navbar.Collapse>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}