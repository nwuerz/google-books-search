import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Input extends Component {
    state = {
        inputVal: ""
    }
    
    onInputChange = (evt) => {
        this.setState({inputVal:evt.target.value});
        // console.log(this.state);
        }

    handleSearch = (evt) => {
        evt.preventDefault();
        if (this.state.inputVal) {
            console.log(this.state.inputVal);
        }
    }

    render() {
    return (
      <Jumbotron>
        <h5>Book Search</h5>
        <br />
        <p>Book:</p>
        <input onChange={this.onInputChange}/>
        <Button onClick={this.handleSearch}>Search</Button>
      </Jumbotron>
    );
  }
}

export default Input;
