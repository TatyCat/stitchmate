import React, { Component } from 'react'
import Landing from './pages/Landing'
import LogIn from './components/LogIn'
import HomeProfile from './pages/HomeProfile'
import PatternPg from './pages/PatternPg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        {/* <Nav /> */}
        {/* <LogIn /> */}

        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/home" component={HomeProfile}></Route>
            <Route path="/pattern" component={PatternPg}></Route>
            {/* <Route path="" component={}></Route> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
