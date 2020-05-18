import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
import Book from '../components/Book';

const Saved = () => {
  return (
    <Container fluid>
      <Header />
      <Jumbotron>
        <h5>Saved Books:</h5>
        <Book />
      </Jumbotron>
    </Container>
  );
};

export default Saved;
