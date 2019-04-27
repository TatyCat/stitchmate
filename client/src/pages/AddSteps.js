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

  loadPattern = () => {
    axios.get(`/api/patterns/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ pattern: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.loadPattern()
  }

  createStep = form => {
    axios.post(`/api/steps`, {
      step: Object.assign(form.formData, { pattern_id: this.state.pattern.id })
    })
      .then(response => {
        this.props.history.push(`/pattern/${this.state.pattern.id}`)
      })
  }


  render() {
    const addStepSchema = {
      title: "Add Step",
      type: "object",
      properties: {
        step_number: { type: "number", title: "Step Number" },
        pattern_step: { type: "string", title: "Pattern Step" },
        row_count: { type: "number", title: "Row Count", default: 0 },
        rep_count: { type: "number", title: "Rep Count", default: 0 }
      }
    }

    return (
      <>
        <Nav />
        <main className="edit-pg">

          <header>
            <Link to={`/pattern/${this.props.match.params.id}`}>
              <button className="w3-ripple pattern-nav-button"><i className="fas fa-arrow-left"></i> Main Pattern Page
            </button>
            </Link>

            <Link to={'/home'}>
              <button className="w3-button w3-ripple pattern-nav-button"><i className="far fa-folder-open"></i> All Projects</button>
            </Link>

          </header>
          <article>
            <Form schema={addStepSchema} onSubmit={this.createStep} />

          </article>
        </main>
      </>
    );
  }
}

export default AddSteps;