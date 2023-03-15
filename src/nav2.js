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
import { toHaveStyle } from '@testing-library/jest-dom';

class TopNav extends Component {
  state = {
    scrolled: false,
    kaomoji_idx: localStorage.getItem("kaomoji_idx") || 0
  }

  kaomojis = [
    '(´•ᴗ•`)ノ', 
    '(◕ᴗ◕)◞*',
    '[❛▽❛]ﾉﾟ',
  ]

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
    localStorage.setItem('kaomoji_idx', (this.state.kaomoji_idx+1)%3)
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
      <Navbar className="top-nav-new" collapseOnSelect expand="lg"  variant="dark">

        {/* <a href="/" className="navbar-brand">
        <img className = "logo" src = {logo} />
          Apoorv Khare
        </a> */}
        <a>
        {this.kaomojis[this.state.kaomoji_idx]}
        </a>

        <a href="/" className="navbar-brand-logo">
        <img className = "logo" src = {logo} />

        </a>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          </Navbar.Collapse>

          <Nav>

              <Link to="/about"> <u> about </u></Link>
              <Link to="/blogs"> <u> articles </u></Link>
              <Link to="/works"> <u> works </u></Link>
              <a target= "_blank" href = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" > <u> résumé </u></a>

          </Nav>
    </Navbar>
  );
  }
}

export default TopNav;