import React, { Component } from 'react';

import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div className="main-wrap">
        <header>
          <div className="left">
            <h1 className="logo">Project Vader</h1>
          </div>
          
          <div className="right">
            <ul className="nav-list">
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </header>
      </div>
    );
  };
}