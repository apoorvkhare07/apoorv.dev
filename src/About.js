import React, {Component} from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Col, Row, Container} from 'react-bootstrap';
import List from './Table.js';
import Contact from './Contact'

class About extends Component {
    render() {
      return (
        <Container fluid className="banner">

                    <Col lg={10} className= "intro">
                    <Row>
                        <h1> About me </h1>
                        <p> I'm Apoorv Khare, final year undergrad at IIT Roorkee, India. I am a full stack software developer, open source contributor, aspiring technical writer and a wanna be designer.</p>
                        <p> I am constantly looking forward to apply the core concepts to real world problems across science and engineering and coding them at the same time in order to create products which aim to solve peoples problem and focus on user satisfaction. </p>
                    </Row>
                    <Row>
                      < List/>
                    </Row>
                    </Col>

            </Container>
    );
    }
  }

export default About;