import React, { Component } from 'react';
import './App.css';
import Main from './main.js'
import Container from 'react-bootstrap/Container'
import List from './list.js'
import Project from './project.js'
import Article from './articles.js'


class Home extends Component {
  render() {
    return (

      <Container fluid className = 'viewport' >

        <Main />
        <List />
        <Project />
        <Article />

      </Container>
  );
  }
}

export default Home;