import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>
          <Link to="/home">
            <span className="m-color-change"><i className="far fa-sticky-note"></i></span>
            StitchMate
          </Link>
        </h1>
        <ul>
          <li><a href="/">Log Out</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
