import React, { Component } from 'react';
import './App.css';
import TopNav from './nav2.js'
import Home from './Home.js'
import Container from 'react-bootstrap/Container'
import About from './Pages/About.js'
import {Route} from 'react-router-dom'
import Contact from './Contact.js'
import Blogs from './blogs.js'
import Works from './Pages/works.js'
import Resume from './Pages/Resume.js'

class App extends Component {
  render() {
    return (
      <Container fluid className = 'viewport' >
        <TopNav />

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/works' component={Works} />

        <Contact />
      </Container>

  );
  }
}

export default App;
