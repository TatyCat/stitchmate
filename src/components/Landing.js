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
          <h3>The <i class="far fa-sticky-note"></i>StitchMate Way</h3>
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

      </main>
    );
  }
}

export default Landing;