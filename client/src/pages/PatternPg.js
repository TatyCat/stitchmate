import React, { Component } from 'react';
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'



class PatternPg extends Component {
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

  incrementRow = (step) => {
    axios.put(`/api/steps/${step.id}`, { row_count: step.row_count + 1 })
      .then(response => {
        this.loadPattern()
      })
  }

  decrementRow = (step) => {
    axios.put(`/api/steps/${step.id}`, { row_count: step.row_count - 1 })
      .then(response => {
        this.loadPattern()
      })
  }

  incRep = (step) => {
    axios.put(`/api/steps/${step.id}`, { rep_count: step.rep_count + 1 })
      .then(response => {
        this.loadPattern()
      })
  }

  decRep = (step) => {
    axios.put(`/api/steps/${step.id}`, { rep_count: step.rep_count - 1 })
      .then(response => {
        this.loadPattern()
      })
  }

  resetCount = (step) => {
    axios.put(`/api/steps/${step.id}`, { row_count: 0 })
      .then(response => {
        this.loadPattern()
      })
  }
  resetRep = (step) => {
    axios.put(`/api/steps/${step.id}`, { rep_count: 0 })
      .then(response => {
        this.loadPattern()
      })
  }

  render() {
    return (
      <>
        < Nav />

        <div>
          <main id="pattern-pg">
            <header>

              <Link to={'/new'}>
                <button className="w3-button w3-ripple pattern-nav-button">
                  <i className="fas fa-tasks"></i> Create a New Pattern</button>
              </Link>

              <Link to={'/home'}>
                <button className="w3-button w3-ripple pattern-nav-button"><i className="far fa-folder-open"></i> Projects in Progress</button>
              </Link>

              <Link to={`/pattern/edit/${this.props.match.params.id}`}>
                <button className="w3-button w3-ripple pattern-nav-button"><i className="fas fa-eraser"></i> Edit Pattern</button>
              </Link>

              <Link to={`/pattern/edit/${this.props.match.params.id}`}>
                <button className="w3-button w3-ripple pattern-nav-button"><i className="fas fa-plus-circle"></i> Add Steps</button>
              </Link>

            </header>

            <h1 className="pattern-name stitchBorder">{this.state.pattern.pattern_name}</h1>

            <h3>Link to Pattern:
               <a href={this.state.pattern.pattern_link} target="_blank" rel="noopener noreferrer"> {this.state.pattern.pattern_link}</a>
            </h3>

            <br />

            {
              this.state.pattern.steps.map(step => (
                <div className="w3-xlarge w3-container w3-margin-bottom" key={step.id}>
                  <div>
                    <p className="patternText"><span className="stepNumberCSS">{step.step_number}. </span>
                      {step.pattern_step}
                    </p>

                    <button className="w3-ripple row-counter-activator" id="step1">Close Counter</button>

                    <div className="rowCounter">
                      <div className="rowCounterCard">
                        <button onClick={() => { this.decrementRow(step) }} className="w3-ripple  rowCountButton"><i className="fas fa-minus"></i></button>

                        <button onClick={() => { this.incrementRow(step) }} className="w3-ripple  rowCountButton" ><i className="fas fa-plus"></i></button>
                        <p>ROW: {step.row_count}</p>

                        <p><button onClick={() => { this.resetCount(step) }} className="w3-ripple reset-step ">Reset</button></p>
                      </div>

                      <div className="rowCounterCard">
                        <button onClick={() => { this.decRep(step) }} className="rowCountButton"><i className="fas fa-minus"></i></button>
                        <button onClick={() => { this.incRep(step) }} className="w3-ripple  rowCountButton" ><i className="fas fa-plus"></i></button>
                        <p>REP: {step.rep_count}</p>
                        <p><button onClick={() => { this.resetRep(step) }} className="w3-ripple reset-step">Reset</button></p>
                      </div>

                    </div>
                  </div>
                </div>
              ))
            }


            <section className="notes-section">
              <h2>Notes</h2>
              {this.state.pattern.pattern_notes}
            </section>
          </main >
        </div >
      </>
    );
  }
}

export default PatternPg;
