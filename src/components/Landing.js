import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <main>
        <header>
          <h2><span>Knit? Crochet?  </span>
            Need to keep count of your sitches?</h2>
          <h1>Keep track of your craft and stitch with us!</h1>
          <button>Register / Log In</button>
        </header>
        <article>
          <h3>The StitchMate Way</h3>
          <section>
            <ul>
              <li>
                <p><i class="fas fa-palette"></i></p>
                <p>Add Custom Patterns</p>
              </li>
              <li>
                <p><i class="fas fa-magic"></i></p>
                <p>As Easy as 1...2...3</p>
                <p><i class="far fa-sticky-note"></i>StitchMate keeps track of where you left off</p>
              </li>
              <li>
                <p><i class="fas fa-map-pin"></i></p>
                <p>Never lose your place in your pattern again</p>
              </li>
              <li>
                <p><i class="far fa-clock"></i></p>
                <p>Organize and save time</p>
              </li>
            </ul>
            <button>Register / Log In</button>
          </section>
        </article>

        <footer class="w3-container w3-light-grey w3-center w3-margin-top">
          <p class="w3-medium w3-wide">Contact - Follow - Donate:</p>
          <p class="w3-large">
            <a href="https://twitter.com/DevTaty" target="_blank"><i class="w3-margin-right socialMedia fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/tatyannac/" target="_blank"><i class="w3-margin-right socialMedia fab fa-linkedin-in"></i></a>
            <a href="mailto:tatyanna.cobb@gmail.com" target="_blank"><i class="w3-margin-right socialMedia fas fa-envelope"></i></a>
            <a href="https://paypal.me/DevTatyanna"><i class="socialMedia fas fa-dollar-sign"></i></a>
          </p>
          <p class="w3-small w3-wide">Copyright &copy;2018 Tatyanna Cobb. All rights reserved. </p>
        </footer>
      </main>
    );
  }
}

export default Landing;