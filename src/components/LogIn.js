import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return (
      <>
        <div className="log-in">
          <h1> <i class="far fa-sticky-note"></i>StitchMate </h1>
          <p><button>Log In</button> <button>Register</button></p>
          <form>
            <button>Log In With Google</button>
            <button>Log In With Twitter</button>
            <p>or</p>
            <input placeholder="Enter your email"></input>
            <input placeholder="Enter your password"></input>
            <a>Don't remember your password?</a>
            <button>LOG IN > </button>
          </form>
        </div>
      </>
    );
  }
}

export default LogIn;