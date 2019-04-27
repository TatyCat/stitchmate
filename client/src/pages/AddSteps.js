import React, { Component } from 'react';
import Nav from '../components/Nav'
import Form from 'react-jsonschema-form'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AddSteps extends Component {
  state = {
    "pattern":
    {
      steps: []
    }
  }


  createStep = form => {
    axios.post(`/api/steps`, {
      step: Object.assign(form.formData, { pattern_id: this.state.pattern.id })
    }).then(reponse => {
      this.loadPattern()
    })
  }


  render() {
    return (
      <>
        <Nav />
        <main className="edit-pg">

          <header>
            <Link to={`/pattern/${this.props.match.params.id}`}>
              <button className="w3-ripple pattern-nav-button"><i className="fas fa-arrow-left"></i> Pattern
            </button>
            </Link>
          </header>
        </main>

      </>
    );
  }
}

export default AddSteps;