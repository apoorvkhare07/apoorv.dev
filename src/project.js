import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './static/logo.png'

class Project extends Component{
    render(){
        const projects = [
            {
                icon: logo,
                title: 'Developer | Coordinator at IMG, IIT Roorkee ',
                about: "Information Management Group (IMG) is the student body\
                that developed, manages and upgrades both the content\
                management system powering the IIT Roorkee website and\
                Channel i, the official intranet portal.",
                tags: ['a','b'],
            },
            {
                icon: logo,
                title: 'Software Developer Summer internship | Radicali Pte. Ltd.',
                about: "Radical i is a Singapore based startup working to make compliance teams ridiculously efficient.\
                Built their website along with coming up with UI aspects, coded a seamless website on react.js and worked on SEO optimization.",
                tags: ['a','b'],
            },
            {
                icon: logo,
                title: 'Full Stack Developer internship at Dataphi Analytics Labs',
                about: "Dataphi Labs builds digital product for clients catering their requirements, and helping them reach idea to revenue faster.",
                tags: ['a','b'],
            },
            {
                icon: logo,
                title: 'Full stack developer intern at Korangle',
                about: "Korangle provides technical solution to educational institutes for easy, hassle free and paper free management of their institutional requirements.",
                tags: ['a','b'],
            }
        ]

        const projects_comp = projects.map((row,index) => {
            return(
                <Row className="project-item">
                    <Col md={1} >
                        <img src = {row.icon} className= "logo-icon" />
                    </Col>

                    <Col md = {10}>
                        <p> {row.about}</p>
                        {row.tags.map((value, index) => {
                            return <Button> {value} </Button>
                        })}

                    </Col>

                    <Col md = {1}>
                        <Button className="email-cta">Link</Button>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">
                <Row>
                <h1>
                    Projects
                </h1>
                </Row>
                {projects_comp}
            </Container>
        )
    }
}

export default Project;