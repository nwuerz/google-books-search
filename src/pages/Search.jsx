import React from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import Header from "../components/Header";
import Input from "../components/Input";
import Book from '../components/Book';

const Search = () => {
  return (
    <Container fluid>
      <Header />
      <Input />
      <Jumbotron >
          <h5>Results:</h5>
          <Book />
      </Jumbotron>
    </Container>
  );
};

export default Search;
