import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Input = (props) => {

    return (
      <Jumbotron>
        <h5>Book Search</h5>
        <br />
        <p>Book:</p>
        <input onChange={props.onChange} />
        <Button onClick={props.onClick}>Search</Button>
      </Jumbotron>
    );
}

export default Input;
