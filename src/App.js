import React, { Component } from 'react';
import './App.css';
import TopNav from './nav.js'
import Home from './Pages/Home.js'
import Container from 'react-bootstrap/Container'
import About from './Pages/About.js'
import {Route, Routes} from 'react-router-dom'
import Contact from './Contact.js'
import Blogs from './blogs.js'
import Works from './Pages/works.js'
import Resume from './Pages/Resume.js'

class App extends Component {
  render() {
    return (
      <Container fluid className = 'viewport' >
        <TopNav />
        <Routes path="/">
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/blogs' element={<Blogs/>} />
          <Route exact path='/works' element={<Works/>} />
        </Routes>
        <Contact />
      </Container>

  );
  }
}

export default App;
