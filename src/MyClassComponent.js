import React, {Component} from "react";

export default class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Class {this.props.className} worked</h1>
      </div>
    );
  }
}