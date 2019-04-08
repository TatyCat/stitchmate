import React, { Component } from 'react';
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'


class PatternPg extends Component {
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

            <h1 className="pattern-name stitchBorder">Bumblebee Keychain</h1>
            <h3>Link to Pattern: <a href={"https://www.ravelry.com/patterns/library/bumblebee-15"}>https://www.ravelry.com/patterns/library/bumblebee-15</a></h3>

            <br />
            <div className="w3-xlarge w3-container w3-margin-bottom">
              <div>
                <p className="patternText"><span className="stepNumberCSS">1.</span> Cast on 20 Stitches. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus id at dolorum nesciunt molestiae nulla! In nesciunt sit ab ratione voluptas, laborum odit modi nam natus reprehenderit, nostrum quasi?</p>
                <div className="rowCounter">
                  <button className="w3-wide w3-border w3-border-light-green w3-small w3-ripple w3-btn w3-round w3-hover-light-green" id="step1">Close Counter</button>

                  <div class="rowCounterCard">
                    <button className="w3-ripple ">-</button>
                    <button className="w3-ripple " >+</button>
                    <p>Row: 3</p>
                    <p><button className="w3-ripple ">Reset</button></p>
                  </div>
                  <div class="repCounterCard">
                    <button className="w3-ripple ">-</button>
                    <button className="w3-ripple ">+</button>
                    <p>Rep: 3</p>
                    <p><button className="w3-ripple ">Reset</button></p>
                  </div>

                </div>

                <div id="rowCountAdd" className="rowCountOpen"></div>
              </div>
            </div>

            <div className="">
              <div>
                <p className="patternText"><span className="stepNumberCSS">2.</span> Cast off 20 Stitches. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus id at dolorum nesciunt molestiae nulla! In nesciunt sit ab ratione voluptas, laborum odit modi nam natus reprehenderit, nostrum quasi?</p>
                <div className="rowCounter">
                  <button className="w3-wide w3-border w3-border-light-green w3-small w3-ripple w3-btn w3-round w3-hover-light-green" id="step1">Row Counter</button>
                </div>

                <div id="rowCountAdd" className="rowCountOpen"></div>
              </div>
            </div>

            <div className="w3-xlarge w3-container w3-margin-bottom">
              <div>
                <p className="patternText"><span className="stepNumberCSS">3.</span> Cast Off 86 sts using the provisional CAST OFF</p>
                <div className="rowCounter">
                  <button className="w3-wide w3-border w3-border-light-green w3-small w3-ripple w3-btn w3-round w3-hover-light-green" id="step1">Row Counter</button>
                </div>

                <div id="rowCountAdd" className="rowCountOpen"></div>
              </div>
            </div>




            <h2>Notes</h2>
            <p>What I will need:</p>
            <p>2.00 mm crochet hook</p>
            <p>Tapestry needle</p>
            <p>3 different yarns in yellow, brown, and white which are compatible with the required crochet hook.</p>
            <p>A pair of black 6.00 mm safety eyes (or another substitute such as black beads or black yarn to embroider)</p>
            <p>Pink embroidery yarn (alternatively a substitute like pink make-up could be used)</p>
            <p>Soft stuffing (like polyester fibrefill)</p>
            <p>Abbreviations:
              A – yarn colour ‘yellow’
              B – yarn colour ‘brown’
             C – yarn colour ‘white’
             st(s) – stitch(es)
             ch – chain stitch
             sc – single crochet
             inc – sc in the same st twice
             dec – sc the next two sts together (invisible
            decrease)
             hdc – half double crochet
            </p>
            <textarea type={Text} placeholder="Enter your notes here..." />
            <br />

            <section>
              <p className="delete-pattern">
                <button className="w3-red w3-btn w3-center w3-round w3-large w3-ripple w3-wide">Delete Pattern</button></p>
            </section>
          </main >
        </div >
      </>
    );
  }
}

export default PatternPg;