import React, { Component } from 'react';

class HomeProfile extends Component {
  render() {
    return (
      <>
        <header id="home-page-pattern-header">
          <button><i class="fas fa-tasks"></i> Create a New Pattern</button>
          <p>...or pick off where you left off:</p>
        </header>
        <article id="home-page-patterns">
          <ul>
            <li>
              <a href="#"><h2>Premie Hat</h2></a>
            </li>
            <li>
              <a href="#"><h2>Adult Hat</h2></a>
            </li>
            <li>
              <a href="#"><h2>Unicorn Hat</h2></a>
            </li>
            <li>
              <a href="#"><h2>Baby Booties</h2></a>
            </li>
            <li>
              <a href="#"><h2>Doll Dress</h2></a>
            </li>
            <li>
              <a href="#"><h2>Pencil Case Holder</h2></a>
            </li>
          </ul>
        </article>

      </>
    );
  }
}

export default HomeProfile;