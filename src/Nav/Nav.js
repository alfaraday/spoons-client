import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return <nav>
      <ul>
        {/* add images */}
        <li>SPOONS</li>
        <li>+</li>
        <li>
          <Link to='/'>Home</Link>
        </li> 
      </ul>
    </nav>
  }
}