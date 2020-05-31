import React, { Component } from 'react';
import './App.css';
import TopNav from './nav.js'
import Home from './Home.js'
import Container from 'react-bootstrap/Container'
import About from './About.js'
import {Route} from 'react-router-dom'
import Contact from './Contact.js'


class App extends Component {
  render() {
    return (
      <Container fluid className = 'viewport' >
        <TopNav />

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        {/* <Route exact path='/blogs' component={Blogs} /> */}
        {/* <Route exact path='/cv' href={Pdf} /> */}
        <Contact />
      </Container>

  );
  }
}

export default App;
