import React, { Component } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


class Landing extends Component {
  render() {
    return (
      <>
        <nav className="landing-nav">
          <h1>
            <Link to="/">
              <span className="m-color-change"><i className="far fa-sticky-note"></i></span>
              StitchMate
            </Link>
          </h1>
          <ul>
            <li><a href="./Login.js">Register/Log In</a></li>
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
            <h1>Knit Easy With StitchMate...</h1>

            <h2>A Row Counter App optimized for knitting and crocheting</h2>
            <button><span>Register / Log In</span></button>
          </header>
          <article>
            <h3>The <span className="stitchmate-post-it"><i className="far fa-sticky-note"></i></span><span className="stitchmate-logo-lettering">StitchMate</span> Way</h3>
            <section>
              <ul>
                <li>
                  <h2><i className="fas fa-palette"></i></h2>
                  <p>Add custom knit and crochet patterns</p>
                </li>
                <li>
                  <h2><i className="fas fa-magic"></i></h2>
                  <p>As easy as 1...2...3 <br /> Keep track of where you left off</p>
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
        < Footer />
      </>
    );
  }
}

export default Landing;