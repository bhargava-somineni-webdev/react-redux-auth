import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
         <ul className="nav navbar-nav">
        </ul>
      </nav>
    );
  }
}


export default connect(null)(Header);
