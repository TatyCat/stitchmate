import React, { Component } from 'react'
import Landing from './pages/Landing'
import HomeProfile from './pages/HomeProfile'
import PatternPg from './pages/PatternPg';
import New from './pages/New'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EditPattern from './pages/EditPattern';
import AddSteps from './pages/AddSteps';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/new" component={New}></Route>

            <Route path="/home" component={HomeProfile}></Route>
            <Route exact path="/pattern/:id" component={PatternPg}></Route>
            <Route exact path="/pattern/edit/:id" component={EditPattern}></Route>
            <Route exact path="/pattern/edit/:id" component={AddSteps}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
