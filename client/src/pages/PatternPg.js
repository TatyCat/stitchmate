import React, { Component } from 'react';
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'


class PatternPg extends Component {
  state = {
    "pattern":
    {
      id: 1,
      pattern_name: "Bumblebee Keychain",
      pattern_link: "https://www.ravelry.com/patterns/library/bumblebee-15",
      pattern_notes: `
            What I will need: 2.00 mm crochet hook
            Tapestry needle, 3 different yarns in yellow, brown, and white which are compatible with the required crochet hook.
            A pair of black 6.00 mm safety eyes(or another substitute such as black beads or black yarn to embroider).
            Pink embroidery yarn(alternatively a substitute like pink make- up could be used).Soft stuffing(like polyester fibrefill).

          Abbreviations: A – yarn colour ‘yellow’ B – yarn colour ‘brown’ C – yarn colour ‘white’ st(s) – stitch(es) ch – chain stitch sc – single crochet inc – sc in the same st twice dec – sc the next two sts together(invisible decrease) hdc – half double crochet.
        `,
      created_at: "2019-01-01",
      user_id: 1111,
      steps: [
        {
          id: 42,
          step_number: 1,
          pattern_step: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus id at dolorum nesciunt molestiae",
          counter_open: false,
          row_count: 3,
          rep_count: 3,
          pattern_id: 1,
        },
        {
          id: 43,
          step_number: 2,
          pattern_step: " Cast on 20 Stitches. on the Low",
          counter_open: false,
          row_count: 19,
          rep_count: 3,
        },
        {
          id: 44,
          step_number: 3,
          pattern_step: "Cast Off 86 sts using the provisional CAST OFF",
          counter_open: true,
          row_count: 19,
          rep_count: 0,
        }
      ]
    }
  }

  deletePattern() {
    // this.state({ pattern: {} })
    console.log('deleted')
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
              <button className="w3-button w3-ripple pattern-nav-button"><a><i className="far fa-edit"></i> Edit Pattern</a></button>
              <button className="w3-button w3-ripple pattern-nav-button"><a><i className="far fa-folder-open"></i> Projects in Progress</a></button>

            </header>

            <h1 className="pattern-name stitchBorder">{this.state.pattern.pattern_name}</h1>

            <h3>Link to Pattern:
              <a href={this.state.pattern.pattern_link}> {this.state.pattern.pattern_link}</a>
            </h3>

            {console.log(this.state.pattern.steps)}
            <br />

            {
              this.state.pattern.steps.map(step => (
                <div className="w3-xlarge w3-container w3-margin-bottom">
                  <div>

                    <p className="patternText"><span className="stepNumberCSS">{step.step_number}. </span>
                      {step.pattern_step}
                    </p>
                    <div className="rowCounter">
                      <button className="w3-wide w3-border w3-border-light-green w3-small w3-ripple w3-btn w3-round w3-hover-light-green " id="step1">Close Counter</button>

                      {/* Component */}

                      <div className="rowCounterCard">
                        <button className="w3-ripple  w3-border-light-green"><i class="fas fa-minus"></i></button>
                        <button className="w3-ripple  w3-border-light-green" ><i class="fas fa-plus"></i></button>
                        <p>Row: {step.row_count}</p>
                        <p><button className="w3-ripple w3-danger">Reset</button></p>
                      </div>
                      <div className="rowCounterCard">
                        <button className="w3-ripple  w3-border-light-green"><i class="fas fa-minus"></i></button>
                        <button className="w3-ripple  w3-border-light-green" ><i class="fas fa-plus"></i></button>
                        <p>Rep: {step.rep_count}</p>
                        <p><button className="w3-ripple w3-danger">Reset</button></p>
                      </div>
                    </div>
                  </div>
                </div>

              ))
            }


            <article className="notes-section">
              <h2>Notes</h2>
              {this.state.pattern.pattern_notes}
              <textarea placeholder="Enter your notes here..."
                onChange={this.handleChange}
                defaultValue={this.state.value}
              />
              <button className="w3-border-light-green textarea-submit-button ">Submit</button>
              <br />

              <section>
                <p className="delete-pattern">
                  <button className="w3-red w3-btn w3-center w3-round w3-large w3-ripple w3-wide" onClick={this.deletePattern}>Delete Pattern</button></p>
              </section>
            </article>
          </main >

        </div >
      </>
    );
  }
}

export default PatternPg;

// this.state.pattern.pattern_notes.notes