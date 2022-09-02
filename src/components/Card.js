import React, { Component } from "react";
import "../../src/style/Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="containerCard">
        <img className="image" src={this.props.src} />
        <p>{this.props.title}</p>
      </div>
    );
  }
}
