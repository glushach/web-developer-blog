import React, { Component } from "react";
import './stylesNew.css';
import Fcomponent from "./Fcomponent";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Button not presses"
    };
    this.updateData = this.updateData.bind(this);
  }
  updateData = (value) => {
    this.setState({
      name: value
    })
  }

  render() {
   return (
     <div>
       {/* pass data from parent to children component*/}
       <p>State: {this.state.name}</p>
       <Fcomponent updateData={this.updateData}/>
     </div>
   )
  }

}