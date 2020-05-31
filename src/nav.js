import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './static/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Pdf from './Docs/dev_cv.pdf'

class TopNav extends Component {
  render(){
    return (
      <Navbar className="top-nav" collapseOnSelect expand="lg"  variant="dark">

      <Navbar.Brand href="/">
      <img className = "logo" src = {logo} />
      Apoorv Khare</Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Nav>

            <Link to="/about">About</Link>
            <Link to="/blogs">Articles</Link>
            <a href = {Pdf} >Portfolio</a>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

export default TopNav;