import React from 'react'
import { Navbar, Button, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const isLanding = this.props.isLanding;
        const isHome = this.props.isHome;
        if(isLanding) {
            return (
                <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                    <Nav className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                        <Navbar.Brand href="#home">U+</Navbar.Brand>
                        <Nav.Item>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Link to={"/register"} className="btn btn-primary upos-nav-btn">Sign Up</Link>
                                <Link to={"/login"} className="btn btn-primary upos-nav-btn">Log In</Link>
                                <Link to={"/dashboard"} className="btn btn-primary upos-nav-btn">Test</Link>
                            </Navbar.Collapse>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            );
        }
        else if(isHome) {
            return (
                <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                    <Nav className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                        <Navbar.Brand href="#home">U+</Navbar.Brand>
                        <Nav.Item>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Link to={"/"} className="btn btn-primary upos-nav-btn">Logout</Link>
                            </Navbar.Collapse>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            );
        }
        else {
            return (
                <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                    <Nav className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                        <Navbar.Brand href="#home">U+</Navbar.Brand>
                    </Nav>
                </Navbar>
            );
        }
    }
}