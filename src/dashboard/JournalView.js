import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class JournalView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderJournals(journals) {
    if (journals && journals.length > 0) {
        return journals.map((journal) => {
            var time = new Date(journal.createdTime)
            time = time.toLocaleDateString()
            return <Card key={journal.journalID} className='my-3'>
                <Card.Header>{time}</Card.Header>
                
                <Card.Body>
                <Card.Title>{journal.title}</Card.Title>
                    <Card.Text>{journal.journalEntry}</Card.Text>
                </Card.Body>
            </Card>
        })
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <Container fluid="md" className="section">
          <Row>
            <Col>
              <Link
                to={"/dashboard"}
                className="btn btn-outline-primary upos-nav-btn"
              >
                Back
              </Link>
            </Col>
            <Col>
              <Link
                to={"/dashboard/journal/new"}
                className="btn btn-primary upos-nav-btn float-right"
              >
                New Journal
              </Link>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <h2 style={{ paddingLeft: 10 }}>All Journals</h2>
                {this.renderJournals(this.props.journals)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
