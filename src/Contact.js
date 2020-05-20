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
                    <Col lg= {7}>
                        <p> Let's talk, write to me at apoorvkhare007@gmail.com </p>
                    </Col>
                    <Col className="icons">
                        <FontAwesomeIcon icon={faGithub}  size= '2x' />
                        <FontAwesomeIcon icon={faTwitter}  size= '2x' />
                        <FontAwesomeIcon icon={faLinkedin} size= '2x' />
                        <FontAwesomeIcon icon={faDribbble} size= '2x' />
                    </Col>
                </Row>
                <Row>
                    <Col className = "note" >
                    <p>
                        Built & designed with ❤️
                    </p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Contact;