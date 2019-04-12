import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <p>Contact - Follow - Donate:</p>
          <p>
            <a href="https://twitter.com/DevTaty" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/tatyannac/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:tatyanna.cobb@gmail.com" target="_blank" rel="noopener noreferrer"><i className=" fas fa-envelope"></i></a>
            <a href="https://tatyanna-tatycat.netlify.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-anchor"></i>
            </a>
          </p>

          <p>Copyright &copy;2018 Tatyanna Cobb. All rights reserved. </p>
        </footer>

      </>
    );
  }
}

export default Footer;