import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
import Input from "../components/Input";
import Book from "../components/Book";
import API from "../components/utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    button: "Save"
  };

  searchBooks = (query) => {
    API.search(query)
      .then((res) => {
          this.setState({ results: res.data.items })
          // console.log(this.state.results);
        })
      .catch((err) => console.log(err));
  };

  onInputChange = (evt) => {
    this.setState({ search: evt.target.value });
    // console.log(this.state);
  };

  handleSearch = (evt) => {
    evt.preventDefault();
    this.searchBooks(this.state.search);
    // console.log(this.state.results);
  };
  
  render() {
    console.log(this.state.results);
    return (
      <Container fluid>
        <Header />
          <Input 
          onChange={this.onInputChange}
          onClick={this.handleSearch}
          />
        <Jumbotron>
          <h5>Results:</h5>
          {this.state.results.length > 0 ? this.state.results.map((result, index) =><Book 
          key={`BOOK - ${index}`} 
          result={result}
          button={this.state.button}
          />) : <p>No Results</p>}
        </Jumbotron>
      </Container>
    );
  }
}

export default Search;
