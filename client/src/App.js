import React, { Component } from 'react'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import LogIn from './components/LogIn'
import HomeProfile from './components/HomeProfile'
import PatternPg from './components/PatternPg';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        {/* <Nav /> */}
        {/* <Landing /> */}
        {/* <LogIn /> */}
        {/* <HomeProfile /> */}
        {/* <PatternPg /> */}
        {/* <Footer /> */}

        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="home" component={HomeProfile}></Route>
            {/* <Route path="" component={}></Route> */}
            {/* <Route path="" component={}></Route> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
