import React from "react";
import { Button, Navbar, Nav, Row, Col, Container, Jumbotron } from "react-bootstrap";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className='landing-background'>
                
            </div>
            <div id='landing-card' className='text-center'>
            <img src='/img/MainLogo1000px.png' width='30%'></img>
            <p>Find yourself today.</p>
        </div>
        </div>
        );
    }
}