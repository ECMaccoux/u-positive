import React from "react";
import { Button, Navbar, Nav, Row, Col, Container, Jumbotron } from "react-bootstrap";

export default class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container fluid="md" id="home">
                    <Jumbotron fluid>
                        <Container style={{textAlign: "center"}}>
                            <h1>Welcome to U+ ("you-positive")</h1>
                            <p>It's health and fitness tracking, made for real people.</p>
                        </Container>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}