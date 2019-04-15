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
    axios.get(`http://localhost:3000/api/patterns/${this.props.match.params.id}`)
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
    axios.put(`http://localhost:3000/api/patterns/${this.state.pattern.id}`, { pattern: form.formData })
      .then(response => {
        this.props.history.push(`/pattern/${this.state.pattern.id}`)
      })
  }


  deletePattern() {
    axios.delete(`http://localhost:3000/api/patterns/${this.props.match.params.id}`)
      .then(() => {
        this.props.history.push('/home')
      })
  }


  createStep = form => {
    axios.post(`http://localhost:3000/api/steps`, {
      step: Object.assign(form.formData, { pattern_id: this.state.pattern.id })
    }).then(reponse => {
      this.loadPattern()
    })
  }

  editStep = (form, step_id) => {
    axios.put(`http://localhost:3000/api/steps/${step_id}`, {
      step: form.formData
    }).then(reponse => {
      this.loadPattern()
    })
  }

  deleteStep = (id) => {
    console.log(id)

    axios.delete(`http://localhost:3000/api/steps/${id}`)
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
      <  >
        <Nav />
        <main className="edit-pg">

          <header>
            <button className="w3-ripple pattern-nav-button">
              <Link to={'/new'}><i className="fas fa-tasks"></i> Create a New Pattern
              </Link>
            </button>

            <button className="w3-ripple pattern-nav-button">
              <Link to={'/home'}><i className="far fa-folder-open"></i> Projects in Progress</Link>
            </button>

            <button className=" w3-ripple delete-pattern" onClick={(e) => this.deletePattern(e)}>Delete Pattern</button>

          </header>
          <article>
            <h1>Edit</h1>
            <section>
              <Form schema={patternSchema}
                onSubmit={this.submitPattern} />
            </section>

            {/* List of steps, each with a delete button -map*/}

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
                  <button type="submit" className="btn btn-info">Save</button>
                  <button className="delete-step" onClick={() => { this.deleteStep(step.id) }}>Delete</button>
                </Form>
              </>
            })}

            <h1>Add</h1>
            <Form schema={addStepSchema} onSubmit={this.createStep} />

          </article>
        </main>
      </ >
    );
  }
}

export default EditPattern;


