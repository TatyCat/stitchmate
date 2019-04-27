import React, { Component } from 'react';
import Nav from '../components/Nav'
import Form from 'react-jsonschema-form'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditPattern extends Component {
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


  submitPattern = form => {
    axios.put(`/api/patterns/${this.state.pattern.id}`, { pattern: form.formData })
      .then(response => {
        this.props.history.push(`/pattern/${this.state.pattern.id}`)
      })
  }


  deletePattern() {
    axios.delete(`/api/patterns/${this.props.match.params.id}`)
      .then(() => {
        this.props.history.push('/home')
      })
  }

  editStep = (form, step_id) => {
    axios.put(`/api/steps/${step_id}`, {
      step: form.formData
    }).then(reponse => {
      this.loadPattern()
    })
  }

  deleteStep = (id) => {
    axios.delete(`/api/steps/${id}`)
      .then(() => {
        this.loadPattern()
      })
  }

  render() {
    const patternSchema = {
      title: 'Edit Pattern',
      type: "object",
      required: ["pattern_name"],
      properties: {
        pattern_name: { type: "string", title: "Pattern Name", default: this.state.pattern.pattern_name },
        pattern_link: { type: "string", title: "Pattern Link", default: this.state.pattern.pattern_link },
        pattern_notes: { type: "string", title: "Pattern Notes", default: this.state.pattern.pattern_notes }
      }
    }

    return (
      <  >
        <Nav />
        <main className="edit-pg">

          <header>
            <Link to={`/pattern/${this.props.match.params.id}`}>
              <button className="w3-ripple pattern-nav-button"><i className="fas fa-arrow-left"></i> Back to Pattern
            </button>
            </Link>

            <Link to={'/new'}><button className="w3-ripple pattern-nav-button">
              <i className="fas fa-tasks"></i> Create a New Pattern
            </button>
            </Link>

            <button className=" w3-ripple delete-pattern" onClick={(e) => this.deletePattern(e)}> <i class="fas fa-trash"></i> Delete Pattern</button>

          </header>
          <article>
            <h1>Edit</h1>
            <section>
              <Form schema={patternSchema}
                onSubmit={this.submitPattern} />

            </section>

            {this.state.pattern.steps.map(step => {
              const editStepSchema = {
                title: "Edit Step",
                type: "object",
                properties: {

                  step_number: { type: "number", title: "Step Number", default: step.step_number },
                  pattern_step: { type: "string", title: "Pattern Step", default: step.pattern_step },
                  row_count: { type: "number", title: "Row Count", default: step.row_count },
                  rep_count: { type: "number", title: "Rep Count", default: step.rep_count }
                }
              }

              return <>
                <Form schema={editStepSchema} onSubmit={form => this.editStep(form, step.id)}>
                  <button type="submit" className="btn btn-info">Update Step</button>
                  <button className="delete-step" onClick={() => { this.deleteStep(step.id) }}>Delete Step</button>
                </Form>
              </>
            })}

            <Link to={`/steps/${this.state.pattern.id}`}>
              <button className="w3-button w3-ripple pattern-nav-button"><i className="fas fa-plus-circle"></i> Add a Step</button>
            </Link>
          </article>
        </main>
      </ >
    );
  }
}

export default EditPattern;


