import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import logo from './static/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iitrlogo from './static/iitrlogo.png'
import andromeda from './static/andromeda.png'
import theme from './static/theme.png'
import todo from './static/to-do.png'
import ihblogo from './static/ihb.png'
import sentiment from './static/face.png'


class Project extends Component{
    render(){
        const projects = [
            {
                icon: iitrlogo,
                title: 'Content Management System',
                about: "A custom CMS, for managing and publishing web-pages on IIT Roorkee’s website.",
                tags: ['Yii2.0','Apache2.0', 'PgSQL', 'RabbitMQ'],
                link:'https://internet.channeli.in/maintainer_site/projects/cms/'
            },
            {
                icon: theme,
                title: 'Theme Generator',
                about: "Theme generator for web interface for databases phpMyAdmin, allowing users to create their custom themes.",
                tags: ['PHP','SASS', 'Jquery'],
                links: '#'
            },
            {
                icon: andromeda,
                title: 'Andromeda',
                about: "Dark theme for VS code built to be pleasing the eyes, be intuitive and comfortable for long working.",
                tags: ['a','b'],
                link: "https://github.com/apoorvkhare07/andromeda"
            },
            {
                icon: ihblogo,
                title: 'I hate Bootstrap',
                about: "A CSS boilerplate to develop responsive, consistent and minimal web pages and apps.",
                tags: ['a','b'],
                link: "https://github.com/apoorvkhare07/i-hate-bootstrap"
            },
            {
                icon: logo,
                title: 'apoorv.dev',
                about: "Theme for my personal portfolio website (source of this website) ",
                tags: ['a','b'],
                link: "https://github.com/apoorvkhare07/apoorv.dev"
            },
            {
                icon: sentiment,
                title: 'Sentiment Analysis of user reviews',
                about: "Sentiment analysis and opinion mining of customer satisfaction trend over geographical location and timeline for zbeauty brands.",
                tags: ['Python','Scrapy', 'Quasi-RNN'],
                link: "https://github.com/apoorvkhare07/"
            },
            {
                icon: todo,
                title: 'Personal ToDo',
                about: "Sentiment analysis and opinion mining of customer satisfaction trend over geographical location and timeline for zbeauty brands.",
                tags: ['Python','Scrapy', 'Quasi-RNN'],
                link: "https://apoorvkhare07.github.io/personal-todo"
            },

        ]

        const projects_comp = projects.map((row,index) => {
            return(
                <Row className="project-item">
                    <Col xs = {3} md={1} >
                        <img src = {row.icon} className= "logo-icon" />


                    </Col>
                    <Col md={3} xs={6} className="project-title-2">
                        <h6> {row.title} </h6>
                    </Col>
                    <Col md = {7} className="project-about">
                        <p> {row.about}</p>

                    </Col>

                    <Col md = {1} xs={3}>
                       <a href={row.link} target="_blank"> <button className="email-cta">Link</button> </a>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">

                <h1>
                    Projects
                </h1>

                {projects_comp}
            </Container>
        )
    }
}

export default Project;