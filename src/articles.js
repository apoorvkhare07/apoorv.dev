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
                title: ' Creating art with Convolutional Neural networks ',

            },
            {
                icon: logo,
                title: 'The emotional and cognitive tolls of staying informed ',

            },
            {
                icon: logo,
                title: ' Setting up essentials for Mac-os ',

            },

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