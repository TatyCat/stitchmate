import React, { Component } from 'react';
import Nav from '../components/Nav'
// import New from '../pages/New'
import { Link } from 'react-router-dom'
import Form from 'react-jsonschema-form'
import axios from 'axios'



class EditPattern extends Component {
  state = {
    "pattern":
    {
      steps: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/patterns/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ pattern: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }


  submit = form => {
    axios.put(`http://localhost:3000/api/patterns/${this.props.match.params.id}`, { pattern: form.formData })
      .then(response => {
        const newPattern = response.data
        this.props.history.push(`/pattern/${newPattern.id}`)
      })
  }


  render() {
    const schema = {
      title: 'Edit Pattern',
      type: "object",
      required: ["pattern_name"],
      properties: {
        pattern_name: { type: "string", title: "Pattern Name", default: this.state.pattern.pattern_name },
        pattern_link: { type: "string", title: "Pattern Link", default: this.state.pattern.pattern_link },
        pattern_notes: { type: "string", title: "Pattern Notes", default: this.state.pattern.pattern_notes }
      }
    }

    const stepsSchema = {
      title: 'Add a Step',
      type: "object",
      required: ["step_number"],
      properties: {
        step_number: { type: "string", title: "Step Number", default: this.state.pattern.steps.step_number },
        pattern_step: { type: "string", title: "Pattern Instruction For The Step", default: this.state.pattern.steps.pattern_step }
      }
    }

    return (
      <  >
        < Nav />
        <main className="edit-pg">

          <header>
            <button className="w3-button w3-ripple pattern-nav-button">
              <Link to={'/new'}><i className="fas fa-tasks"></i> Create a New Pattern
                </Link>
            </button>
            <button className="w3-button w3-ripple pattern-nav-button"><Link to={'/home'}><i className="far fa-folder-open"></i> Projects in Progress</Link></button>

          </header>

          <Form schema={schema}
            onSubmit={this.submit} />

          <Form schema={stepsSchema} onSubmit={this.submitSteps} />
        </main>
      </ >

      // Put a list of steps, and a button for each to delete that step

      // Another form to *ADD* a step
    );
  }
}

export default EditPattern;


