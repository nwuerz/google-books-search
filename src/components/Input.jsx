import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import API from "./utils/API";

class Input extends Component {
  state = {
    search: "",
    results: "",
  };

  searchBooks = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  };

  onInputChange = (evt) => {
    this.setState({ search: evt.target.value });
    // console.log(this.state);
  };

  handleSearch = (evt) => {
    evt.preventDefault();
    this.searchBooks(this.state.search);
    console.log(this.state.results);
  };

  render() {
    return (
      <Jumbotron>
        <h5>Book Search</h5>
        <br />
        <p>Book:</p>
        <input onChange={this.onInputChange} />
        <Button onClick={this.handleSearch}>Search</Button>
      </Jumbotron>
    );
  }
}

export default Input;
