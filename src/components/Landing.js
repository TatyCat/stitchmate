import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <>
        <nav className="landing-nav">
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
        <main class="main-container landing-pg">
          <header>
            <h2><span>Knit? Crochet?  </span>
              Need to keep count of your sitches?</h2>
            <h1>Keep track of your craft and stitch with us!</h1>
            <button><span>Register / Log In</span></button>
          </header>
          <article>
            <h3>The <i class="far fa-sticky-note"></i>StitchMate Way</h3>
            <section>
              <ul>
                <li>
                  <h2><i class="fas fa-palette"></i></h2>
                  <p>Add Custom Patterns</p>
                </li>
                <li>
                  <h2><i class="fas fa-magic"></i></h2>
                  <p>As Easy as 1...2...3 <i class="far fa-sticky-note"></i>StitchMate keeps track of where you left off</p>
                </li>
                <li>
                  <h2><i class="fas fa-map-pin"></i></h2>
                  <p>Never lose your place in your pattern again</p>
                </li>
                <li>
                  <h2><i class="far fa-clock"></i></h2>
                  <p>Organize and save time</p>
                </li>
              </ul>
              <button><span>Register / Log In</span></button>
            </section>
          </article>

        </main>
      </>
    );
  }
}

export default Landing;