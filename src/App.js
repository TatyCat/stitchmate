import React, { Component } from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
// import LogIn from './components/LogIn'
// import HomeProfile from './components/HomeProfile'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Landing />
        {/* <LogIn /> */}
        {/* <HomeProfile /> */}
        <Footer />
      </>
    )
  }
}

export default App
