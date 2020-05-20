import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../components/Header";
import Input from "../components/Input";
import Book from "../components/Book";
import SearchContext from "../contexts/SearchContext";
import API from "../components/utils/API";

class Search extends Component {
  state = {
    search: "",
    results: {},
  };

  searchBooks = (query) => {
    API.search(query)
      .then((res) => {
          this.setState({ results: res.data })
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
    return (
      <Container fluid>
        <Header />
          <Input 
          onChange={this.onInputChange}
          onClick={this.handleSearch}
          />
        <Jumbotron>
          <h5>Results:</h5>
          <SearchContext.Provider value={this.state.results}>
          <Book />
          </SearchContext.Provider>
        </Jumbotron>
      </Container>
    );
  }
}

export default Search;
