import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class Main extends Component{
    render(){
        return (
            <Container fluid className="banner">
            <Row>
                    <Col md={6} className= "lead">
                        <h1> Hi, I'm Apoorv </h1>
                        <p> I'm a full stack software developer creating open source projects and writing about modern technologies </p>
                    </Col>
                    <Col md = {1} >

                    </Col>
                    <Col md = {5} className="elevator">
                        Email me
                    </Col>
            </ Row>
            </Container>
        )
    }
}

export default Main;