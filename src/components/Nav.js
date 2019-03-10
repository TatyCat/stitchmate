import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>
          <i className="far fa-sticky-note"></i>StitchMate
        </h1>
        <ul>
          <li><a href="#">Log In/Sign Up</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Share buttons</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
