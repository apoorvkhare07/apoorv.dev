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
                title: 'Content Management System',
                about: "At IMG we created an Content management system, which helps in managing and publishing web-pages on IIT Roorkee’s official website.",
                tags: ['Yii2.0','Apache2.0', 'PgSQL', 'RabbitMQ'],
                link:'https://internet.channeli.in/maintainer_site/projects/cms/'
            },
            {
                icon: logo,
                title: 'Theme Generator',
                about: "Added theme generator tool to commonly used web interface for databases phpMyAdmin, which allows users to create their custom themes",
                tags: ['PHP','SASS', 'Jquery'],
                links: ''
            },
            {
                icon: logo,
                title: 'Sentiment Analysis of user reviews',
                about: "Executed sentiment analysis and opinion mining to infer customer satisfaction trend over geographical location and timeline for 5 beauty brands.",
                tags: ['Python','Scrapy', 'Quasi-RNN'],
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
                    <Col md={2} >
                        <p> {row.title} </p>
                    </Col>
                    <Col md = {8}>
                        <p> {row.about}</p>
                        {row.tags.map((value, index) => {
                            return <Button  className="email-cta-3"> {value} </Button>
                        })}

                    </Col>

                    <Col md = {1}>
                       <a href={row.link}> <Button className="email-cta">Link</Button> </a>
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