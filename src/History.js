import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"> Go back home bro </Link>
        <p>Notre histoire</p>
       
      </div>
    );
  }
}

export default History;
