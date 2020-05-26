import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import API from "./utils/API";

const Book = (props) => {
  const {
    volumeInfo: { title, authors, imageLinks, description },
    searchInfo,
  } = props.result;

  const getDescriptionText = () => {
    if (description) {
      return description;
    } else if (searchInfo && searchInfo.textSnippet) {
      return searchInfo.textSnippet;
    }
    return "no description";
  };

  const handleClick = ()=> {
    API.saveBook({
      title: title,
      author: authors.join(", "),
      images: imageLinks,
      description: getDescriptionText()
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  return (
    <div style={{ border: "solid 1px black", padding: "10px" }}>
      <Row>
        <Col md="9">
          <h5>{title}</h5>
          {authors ? <p>{authors.join(", ")}</p> : null}
        </Col>
        <Col md="3">
          <Button style={{ marginRight: "20px" }}>View</Button>
          <Button onClick ={handleClick}>{props.button}</Button>
        </Col>
      </Row>
      <Row>
        <Col md="3">
          {imageLinks ? <img alt={title} src={imageLinks.thumbnail} /> : null}
        </Col>
        <Col md="9">
          <p>{getDescriptionText()}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
