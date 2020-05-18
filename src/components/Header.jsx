import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron style={{ textAlign: "center" }}>
      <h1>(React) Google Books Search</h1>
      <br />
      <h5>Search for and Save Books of Interest</h5>
    </Jumbotron>
  );
};

export default Header;
