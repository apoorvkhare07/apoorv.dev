import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './static/logo.png'

class Article extends Component{
    render(){
        const articles = [
            {
                icon: logo,
                title: 'Developer | Coordinator at IMG, IIT Roorkee ',

            },
            {
                icon: logo,
                title: 'Software Developer Summer internship | Radicali Pte. Ltd.',

            },
            {
                icon: logo,
                title: 'Full Stack Developer internship at Dataphi Analytics Labs',

            },
            {
                icon: logo,
                title: 'Full stack developer intern at Korangle',

            }
        ]

        const articles_comp = articles.map((row,index) => {
            return(
                <Row className="project-item">
                    <Col md={1} >
                        <img src = {row.icon} className= "logo-icon" />
                    </Col>

                    <Col>
                        <p> {row.title}</p>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">
                <Row>
                <h1>
                    Articles
                </h1>
                </Row>
                {articles_comp}
            </Container>
        )
    }
}

export default Article;