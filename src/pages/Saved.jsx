import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";

const Saved = () => {
  return (
    <Container fluid>
      <Header />
      <Jumbotron>
        <h5>Saved Books:</h5>
      </Jumbotron>
    </Container>
  );
};

export default Saved;
