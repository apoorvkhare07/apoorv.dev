import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './static/logo.png'
import imglogo from './static/img_logo.png'
import radicalilogo from './static/Radicali.png'
import dataphilogo from './static/dataphi.png'
import koranglelogo from './static/korangle.png'

class List extends Component{
    render(){
        const experiences = [
            {
                icon: imglogo,
                title: 'Developer | Coordinator at IMG, IIT Roorkee ',
                about: "Information Management Group (IMG) is the student body\
                that developed, manages and upgrades both the content\
                management system powering the IIT Roorkee website and\
                Channel i, the official intranet portal.",
                link: 'https://internet.channeli.in/maintainer_site/'
            },
            {
                icon: radicalilogo,
                title: 'Software Developer Summer internship | Radicali Pte. Ltd.',
                about: "Radical i is a Singapore based startup working to make compliance teams ridiculously efficient.\
                Built their website along with coming up with UI aspects, coded a seamless website on react.js and worked on SEO optimization.",
                link: 'https://radicali.io/'
            },
            {
                icon: dataphilogo,
                title: 'Full Stack Developer internship at Dataphi Analytics Labs',
                about: "Dataphi Labs builds digital product for clients catering their requirements, and helping them reach idea to revenue faster.",
                link:'http://dataphilabs.com/'
            },
            {
                icon: koranglelogo,
                title: 'Full stack developer intern at Korangle',
                about: "Korangle provides technical solution to educational institutes for easy, hassle free and paper free management of their institutional requirements.",
                link: 'https://www.korangle.com/'
            }
        ]

        const exp = experiences.map((row,index) => {
            return(
                <Row className="project-item">
                    <Col md={1} xs={3}>
                    <a href = {row.link} target="_blank" >
                        <img src = {row.icon} className= "logo-icon" />
                    </a>

                    </Col>
                    <Col md={3} xs = {8} className="project-title">
                        <h6> {row.title} </h6>
                    </Col>

                    <Col md={8} className="project-about">
                        <p> {row.about}</p>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">

                <h1>
                    Experience
                </h1>

                {exp}
            </Container>
        )
    }
}

export default List;