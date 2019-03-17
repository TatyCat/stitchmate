import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <>
        <nav className="landing-nav">
          <h1>
            <a href="./Landing.js">
              <span className="m-color-change"><i className="far fa-sticky-note"></i></span>StitchMate
          </a>
          </h1>
          <ul>
            <li><a href="./Login.js">Register/Log In</a></li>
            <li><a href="#">FAQs</a></li>
            <li id="social-media-links">
              <a href="https://pinterest.com/" target="_blank">
                <i className="fab fa-pinterest-square"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="w3-margin-right fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="w3-margin-right fab fa-facebook"></i>
              </a>
            </li>

          </ul>
        </nav>
        <main className="main-container landing-pg">
          <header>
            <h2><span>Knit? Crochet?  </span>
              Need to keep count of your sitches?</h2>
            <h1>Keep track by stitching with us

            </h1>
            <button><span>Register / Log In</span></button>
          </header>
          <article>
            <h3>The <span className="stitchmate-post-it"><i className="far fa-sticky-note"></i></span><span className="stitchmate-logo-lettering">StitchMate</span> Way</h3>
            <section>
              <ul>
                <li>
                  <h2><i className="fas fa-palette"></i></h2>
                  <p>Add Custom Knit and Crochet Patterns</p>
                </li>
                <li>
                  <h2><i className="fas fa-magic"></i></h2>
                  <p>As Easy as 1...2...3 <br /> keep  track of where you left off</p>
                </li>
                <li>
                  <h2><i className="fas fa-map-pin"></i></h2>
                  <p>Never lose your place in your pattern again</p>
                </li>
                <li>
                  <h2><i className="far fa-clock"></i></h2>
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