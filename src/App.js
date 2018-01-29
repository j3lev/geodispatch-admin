import React, { Component } from 'react';
import logo from './logo.svg';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { MapboxContainer, SocketContainer } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Jumbotron><h1>Geo-dispatch Admin</h1></Jumbotron>
          <SocketContainer>
            <Row>
              <Col xs={12}>
                <MapboxContainer />
              </Col>
            </Row>
          </SocketContainer>
        </Container>
      </div>
    );
  }
}

export default App;