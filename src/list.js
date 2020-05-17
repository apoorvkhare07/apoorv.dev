import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './static/logo.png'

class List extends Component{
    render(){
        const experiences = [
            {
                icon: logo,
                title: 'Developer | Coordinator at IMG, IIT Roorkee ',
                about: "Information Management Group (IMG) is the student body\
                that developed, manages and upgrades both the content\
                management system powering the IIT Roorkee website and\
                Channel i, the official intranet portal.",
            },
            {
                icon: logo,
                title: 'Student | Google summer of Code 2019',
                about: "Information Management Group (IMG) is the student body\
                that developed, manages and upgrades both the content\
                management system powering the IIT Roorkee website and\
                Channel i, the official intranet portal.",
            },
            {
                icon: logo,
                title: 'Developer | Coordinator at IMG, IIT Roorkee ',
                about: "Information Management Group (IMG) is the student body\
                that developed, manages and upgrades both the content\
                management system powering the IIT Roorkee website and\
                Channel i, the official intranet portal.",
            }
        ]

        const exp = experiences.map((row,index) => {
            return(
                <Row className="project-item">
                    <Col md={1} >
                        <img src = {row.icon} className= "logo-icon" />
                    </Col>
                    <Col md={2}>
                        <h6> {row.title} </h6>
                    </Col>

                    <Col>
                        <p> {row.about}</p>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">
                <Row>
                <h1>
                    Experience
                </h1>
                </Row>
                {exp}
                <Row>
                <h1>
                    Projects
                </h1>
                </Row>
                    {exp}
            </Container>
        )
    }
}

export default List;