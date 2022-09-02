import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

export default class MovieCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
