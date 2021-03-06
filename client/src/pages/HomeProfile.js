import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'



class HomeProfile extends Component {

  state = {
    patterns: [

    ]
  }

  componentDidMount() {
    axios.get('/api/patterns')
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
            <button><Link to={'/new'}><i className="fas fa-tasks"></i> Create a New Pattern</Link></button>
            <p>...or pick up where you left off:</p>
          </header>
          <article id="home-page-patterns">
            <ul>
              {this.state.patterns.map(pattern =>
                <li key={pattern.id}>
                  <Link to={`/pattern/${pattern.id}`}>
                    <h2>{pattern.pattern_name} <span> Initiated on {moment(pattern.created_at).format("MMM Do YYYY")}</span>
                    </h2>
                  </Link>
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