import React, {Component} from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Col, Container} from 'react-bootstrap';

class About extends Component {
    render() {
      return (
        <Container fluid className="banner">

                    <Col lg={10} className= "intro">
                        <h1> About me </h1>
                        <p> I'm Apoorv Khare, final year undergrad at IIT, Roorkee, India. I am a full stack software developer, open source contributor, aspiring technical writer and a wanna be designer.</p>
                        <p> I'm Apoorv Khare, final year undergrad at IIT, Roorkee, India. I am a full stack software developer, open source contributor, aspiring technical writer and a wanna be designer.</p>
                    </Col>

            </Container>
    );
    }
  }

export default About;