import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDribbble, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component{
    render(){
        return(
            <Container fluid className="footer">
                <Row>
                    <Col lg= {4} xs = {12} className = "note">
                        {/* <p> Let's talk, write to me at apoorvkhare007@gmail.com </p> */}

                    <p>
                        Built & designed with ❤️
                    </p>

                    </Col>
                    <Col lg= {4} xs = {12}>

                    </Col>
                    <Col lg= {4} xs = {12} className="icons">
                       <a target="_blank" href="https://github.com/apoorvkhare07"> <FontAwesomeIcon icon={faGithub}  size= '1x' /> </a>
                       <a target="_blank" href="https://twitter.com/apoorvkhare12"><FontAwesomeIcon icon={faTwitter}  size= '1x' /> </a>
                       <a target="_blank" href="https://linkedin.com/in/apoorvkhare07"><FontAwesomeIcon icon={faLinkedin} size= '1x' /> </a>
                       <a target="_blank" href="https://dribbble.com/apoorv07"><FontAwesomeIcon icon={faDribbble} size= '1x' /> </a>
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default Contact;