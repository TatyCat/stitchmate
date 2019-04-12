import React, { Component } from 'react'
import Landing from './pages/Landing'
import HomeProfile from './pages/HomeProfile'
import PatternPg from './pages/PatternPg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            {/* <Route path="" component={}></Route> */}

            <Route path="/home" component={HomeProfile}></Route>
            <Route path="/pattern/:id" component={PatternPg}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
