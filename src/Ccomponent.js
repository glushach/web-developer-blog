import React, { Component } from "react";
import './stylesNew.css';

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'off',
      label: 'Press'
    };

    this.press = this.press.bind(this);

    /*Initialization is faze which component starting life. Set props end state*/
    console.log('Constructor')
  }

  componentDidMount() {
    /*Component is mounting in DOM*/
    console.log('componentDidMount()');
  }

  /*
  shouldComponentUpdate(), componentDidUpdate()
  State is changing many times. Click, input text, submit ets
  */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    /* Must component update or not*/
    console.log('shouldComponentUpdate()')
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*Call after repeat rendering*/
    console.log('componentDidUpdate()')
  }

  componentWillUnmount() {
    /* Call after unmount component it is delete component from DOM
      END lifecycle of component
    */
  }

  press() {
    let className = (this.state.class === 'off') ? 'on' : 'off';
    this.setState({class: className})
  }
  render() {
    console.log('render()');
    return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
  }

}