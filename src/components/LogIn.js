import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return (
      <main>
        <div className="log-in">
          <h1>
            <span id="m-color-change"><i className="far fa-sticky-note"></i></span>StitchMate
          </h1>
          <p><button>Log In</button> <button>Register</button></p>
          <form>
            <button>Log In With Google</button>
            <button>Log In With Twitter</button>
            <p>or</p>
            <input placeholder="Enter your email"></input>
            <input placeholder="Enter your password"></input>
            <br></br>
            <a>Don't remember your password?</a>
            <br></br>
            <button>LOG IN</button>
          </form>

        </div>
      </main>
    );
  }
}

export default LogIn;