import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>
          <a href="./Landing.js">
            <span id="m-color-change"><i className="far fa-sticky-note"></i></span>StitchMate
          </a>
        </h1>
        <ul>
          <li><a href="./Login.js">Register/Log In</a></li>
          <li><a href="#">FAQs</a></li>
          <li id="social-media-links">
            <a href="https://pinterest.com/" target="_blank">
              <i class="fab fa-pinterest-square"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i class="w3-margin-right fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com/" target="_blank">
              <i class="w3-margin-right fab fa-facebook"></i>
            </a>
          </li>

        </ul>
      </nav>
    )
  }
}

export default Nav
