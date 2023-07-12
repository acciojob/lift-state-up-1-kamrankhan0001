
// import React from "react";
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
        <h1>Parent Component</h1>
        <h2>Child Component</h2>
        <button onClick={this.props.handleClick}>Show Modal</button>
        <h3>Modal Content</h3>
        <p>this is the modal content</p>
        {this.props.showModal && <div className="modal">Modal Content</div>}
      </div>
    );
  }
}

export default Parent;
