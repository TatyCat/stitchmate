import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import Nav from '../components/Nav'


class HomeProfile extends Component {

  state = {
    patterns: [

    ]
  }

  componentDidMount() {
    const axios = require('axios')
    axios.get('http://localhost:3000/patterns')
      .then(response => {
        this.setState({ patterns: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <>
        <main>
          < Nav />
          <header id="home-page-pattern-header">
            <button><a><i className="fas fa-tasks"></i> Create a New Pattern</a></button>
            <p>...or pick off where you left off:</p>
          </header>
          <article id="home-page-patterns">
            <ul>
              {this.state.patterns.map(pattern =>
                <li key={pattern.id}>
                  <a href="#">
                    <h2>{pattern.pattern_name} <span> Initiated on {moment(pattern.created_at).format("MMM Do YYYY")}</span>
                    </h2>
                  </a>
                </li>
              )}
            </ul>
          </article>
        </main>
      </>
    );
  }
}

export default HomeProfile;