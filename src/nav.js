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
  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 40) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    return (
      <Navbar className= { scrolled ? "nav-container-2" : "nav-container" } collapseOnSelect expand="lg"  variant="dark">
      <Navbar className= { scrolled ? "top-nav-2" : "top-nav" } collapseOnSelect expand="lg"  variant="dark">

      <a href="/" className="navbar-brand">
      <img className = "logo" src = {logo} />
      Apoorv Khare
      </a>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Nav>

            <Link to="/about">About</Link>
            <Link to="/blogs">Articles</Link>
            <a target= "_blank" href = {Pdf} >Portfolio</a>

        </Nav>
      </Navbar.Collapse>

    </Navbar>
    </Navbar>
  );
  }
}

export default TopNav;