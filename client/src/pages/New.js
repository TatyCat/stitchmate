import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import Nav from '../components/Nav'
import axios from 'axios'

class New extends Component {

  submit = form => {
    axios.post(`/api/patterns`, {
      pattern: form.formData
    })
      .then(response => {
        const newPattern = response.data
        this.props.history.push(`/pattern/edit/${newPattern.id}`)
      })
  }

  render() {
    const schema = {
      title: 'Create a New Pattern',
      type: "object",
      required: ["pattern_name"],
      properties: {
        pattern_name: { type: "string", title: "Pattern Name", default: ' ' },
        pattern_link: { type: "string", title: "Pattern Link", default: ' ' },
        pattern_notes: { type: "string", title: "Pattern Notes", default: ' ' }
      }
    }

    return (
      <>
        < Nav />
        <main className="new-pg">

          <h1>Create a New Pattern:</h1>
          <Form schema={schema}
            onSubmit={this.submit} />
        </main>
      </>
    );
  }
}

export default New;