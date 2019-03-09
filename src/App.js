import React, { Component } from 'react'
import Menu from './components/Menu'
// import Landing from './components/Landing'
// import LogIn from './components/LogIn'
import HomeProfile from './components/HomeProfile'

class App extends Component {
  render() {
    return (
      <>
        <Menu />
        {/* <Landing /> */}
        {/* <LogIn /> */}
        <HomeProfile />
      </>
    )
  }
}

export default App
