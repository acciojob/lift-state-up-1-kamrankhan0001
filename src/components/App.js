
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
        <h1>parent Component</h1>
        <h2>child Component</h2>
        <button onClick={this.props.handleClick}>show Modal</button>
        <h3>model Content</h3>
        <p>this is the model Content</p>
        {this.props.showModal && <div className="modal">Modal Content</div>}
      </div>
    );
  }
}

export default Parent;
