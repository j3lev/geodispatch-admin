import React, { Component } from 'react';
import logo from './logo.svg';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { MapboxContainer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container fluid>
          <Jumbotron><h1>Geo-dispatch Admin</h1></Jumbotron>
          <Row>
            <Col xs={12}>
              <MapboxContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
