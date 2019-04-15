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

  componentDidMount() {
    axios.get(`http://localhost:3000/api/patterns/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ pattern: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <>
        < Nav />

        <div>
          <main id="pattern-pg">
            <header>
              <button className="w3-button w3-ripple pattern-nav-button">
                <Link to={'/new'}><i className="fas fa-tasks"></i> Create a New Pattern
                </Link>
              </button>

              <button className="w3-button w3-ripple pattern-nav-button"><Link to={`/pattern/edit/${this.props.match.params.id}`}><i className="far fa-edit"></i> Edit / Add to Pattern</Link></button>

              <button className="w3-button w3-ripple pattern-nav-button"><Link to={'/home'}><i className="far fa-folder-open"></i> Projects in Progress</Link></button>
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
                    <div className="rowCounter">
                      <button className="w3-wide w3-border w3-border-light-green w3-small w3-ripple w3-btn w3-round w3-hover-light-green " id="step1">Close Counter</button>

                      {/* Component */}

                      <div className="rowCounterCard">
                        <button className="w3-ripple  w3-border-light-green"><i className="fas fa-minus"></i></button>
                        <button className="w3-ripple  w3-border-light-green" ><i className="fas fa-plus"></i></button>
                        <p>Row: {step.row_count}</p>
                        <p><button className="w3-ripple w3-danger">Reset</button></p>
                      </div>
                      <div className="rowCounterCard">
                        <button className="w3-ripple  w3-border-light-green"><i className="fas fa-minus"></i></button>
                        <button className="w3-ripple  w3-border-light-green" ><i className="fas fa-plus"></i></button>
                        <p>Rep: {step.rep_count}</p>
                        <p><button className="w3-ripple w3-danger">Reset</button></p>
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
