import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <p>Contact - Follow - Donate:</p>
          <p>
            <a href="https://twitter.com/DevTaty" target="_blank"><i class="w3-margin-right fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/tatyannac/" target="_blank"><i class="w3-margin-right fab fa-linkedin-in"></i></a>
            <a href="mailto:tatyanna.cobb@gmail.com" target="_blank"><i class="w3-margin-right fas fa-envelope"></i></a>
            <a href="https://paypal.me/DevTatyanna"><i class="fas fa-donate"></i>
            </a>
          </p>

          <p class="w3-small w3-wide">Copyright &copy;2018 Tatyanna Cobb. All rights reserved. </p>
        </footer>

      </>
    );
  }
}

export default Footer;