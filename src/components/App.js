
//import React from "react";
import './../styles/App.css';

import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClick = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="parent">
        <Child showModal={this.state.showModal} handleClick={this.handleClick} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Open Modal</button>
        {this.props.showModal && <div className="modal">Modal Content</div>}
      </div>
    );
  }
}

export default Parent;
