import React, { Component } from 'react';

class Notes extends Component {

  render() {
    return (
      <ul>
        {notes.map(note =>
          <li >{note}</li>
        )}
      </ul>
    );
  }
}

export default Notes;