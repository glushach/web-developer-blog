import React, { Component } from "react";
import {Menu} from "./Menu";

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <h1>Class component {this.props.name}</h1>
      </div>
    )
  }
}
Ccomponent.defaultProps = {name: 'Alexey'}