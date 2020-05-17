import React, { Component } from 'react';
import './App.css';
import TopNav from './nav.js'
import Main from './main.js'
import Container from 'react-bootstrap/Container'
import List from './list.js'

class App extends Component {
  render() {
    return (
      <Container fluid className = 'viewport' >
        <TopNav />
        <Main />
        <List />
      </Container>
  );
  }
}

export default App;
