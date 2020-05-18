import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";

class Book extends Component {
  render() {
    return (
      <div style={{ border: "solid 1px black", padding: "10px"}}>
        <Row>
          <Col md="9">
            <h5>Dynamic Title</h5>
            <p>Dynamic Author</p>
          </Col>
          <Col md="3">
            <Button style={{ marginRight: "20px" }}>View</Button>
            <Button>Delete</Button>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <img src="https://placekitten.com/150/150" />
          </Col>
          <Col md="9">
            <p>
              DYNAMIC BOOK DESCRIPTION - Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.{" "}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Book;
