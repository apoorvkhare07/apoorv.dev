import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './static/logo.png'

class ArticleList extends Component{
    render(){
        const articles = [
            {
                icon: logo,
                title: ' Creating art with CNNs ',

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
                    <Col md={1} xs = {3} >
                        <img src = {row.icon} className= "logo-icon" />
                    </Col>

                    <Col className="project-title-3">
                        <h6> {row.title}</h6>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">

                <h1>
                    Articles
                </h1>

                {articles_comp}
            </Container>
        )
    }
}

export default ArticleList;