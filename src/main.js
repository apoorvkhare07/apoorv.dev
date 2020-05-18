import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import me from './static/me.jpg'
import Button from 'react-bootstrap/Button'
class Main extends Component{
    render(){
        return (
            <Container fluid className="banner">

                    <Col md={7} lg={7} className= "lead">
                        <h1> Hi, I'm Apoorv </h1>
                        <p> I'm a full stack software developer creating open source projects and writing about modern technologies </p>
                    </Col>
                    <Col md = {1} lg={1} >

                    </Col>
                    <Col md = {4} lg = {4} className="elevator">
                        <img src = {me} className="my-image" />
                        <p>
                            I’m currently looking for a internship/freelance in software development. If you have an interesting project for me, let’s talk.
                        </p>
                        <Button className="email-cta">Email me</Button>

                    </Col>

            </Container>
        )
    }
}

export default Main;