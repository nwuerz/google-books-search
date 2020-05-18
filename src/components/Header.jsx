import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid>
      <Jumbotron style={{ textAlign: "center"}}>
        <h1>(React) Google Books Search</h1>
        <br />
        <h5>Search for and Save Books of Interest</h5>
      </Jumbotron>
    </Container>
  );
};

export default Header;
