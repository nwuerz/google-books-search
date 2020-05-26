import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
import Book from '../components/Book';

const Saved = () => {
  //Fetch saved books, save to state and then map over
  return (
    <Container fluid>
      <Header />
      <Jumbotron>
        <h5>Saved Books:</h5>
        {/* <Book result /> */}
      </Jumbotron>
    </Container>
  );
};

export default Saved;
