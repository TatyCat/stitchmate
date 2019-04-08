import React, { Component } from 'react';

class HomeProfile extends Component {

  state = {
    patterns: [
      {
        pattern_name: "Premie Hat",
        created_at: "12/19/2018"
      },

      {
        pattern_name: "Adult Hat",
        created_at: "12/19/2018"
      },

      {
        pattern_name: "Unicorn Hat",
        created_at: "12/19/2018"
      },

      {
        pattern_name: "Baby Unicorn",
        created_at: "12/19/2018"
      },

      {
        pattern_name: "Doll Dress",
        created_at: "12/19/2018"
      },

      {
        pattern_name: "Pencil Case Holder",
        created_at: "10/19/20184"
      },

      {
        pattern_name: "Yarn Cake",
        created_at: "02/08/37"
      }

    ]
  }

  render() {
    return (
      <main>
        <header id="home-page-pattern-header">
          <button><a><i class="fas fa-tasks"></i> Create a New Pattern</a></button>
          <p>...or pick off where you left off:</p>
        </header>
        <article id="home-page-patterns">
          <ul>
            {this.state.patterns.map(pattern =>
              <li key={pattern.id}>
                <a href="#">
                  <h2>{pattern.pattern_name} <span> Initiated on {pattern.created_at}</span>
                  </h2>
                </a>
              </li>)
            }
          </ul>
        </article>

      </main>
    );
  }
}

export default HomeProfile;