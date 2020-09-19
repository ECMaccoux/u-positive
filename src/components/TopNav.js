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
        if(this.props.myInfo.userID) {
            return (
                <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                        <Navbar.Brand href="/dashboard">U Positive</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='ml-auto'>
                                <Link to={"/logout"} className="btn btn-primary upos-nav-btn">Logout</Link>
                                </Nav>
                            </Navbar.Collapse>


                </Navbar>
            );
        }
        else {
            return (
                
                <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                <Navbar.Brand href="/dashboard">U Positive</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ml-auto'> 
                        <Link to={"/login"} className="btn btn-outline-primary upos-nav-btn m-1">Log In</Link>
                        <Link to={"/register"} className="btn btn-primary upos-nav-btn m-1">Sign Up</Link>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
            );
        }
        /**else {
            return (
                <Navbar bg="light" sticky="top" expand="md" className="upos-nav">
                    <Nav className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                        <Navbar.Brand href="#home">U Positive</Navbar.Brand>
                    </Nav>
                </Navbar>
            );
        }*/
    }
}