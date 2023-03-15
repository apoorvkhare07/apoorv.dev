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

                    <Row className='subHead'>
                    <h3 style={{width: '20%'}}> blogs </h3> 
                    <hr className='hrLine' />
                    </Row>
                    <Row>
                    I [1]write elegant code; [2]design accessible interfaces; [3]deploy scalable apps; 
                    <br /> [4]author helpful documentation; [5]nurture FOSS communities and [6]sneak easter eggs.
                    <br /> <br /> I, much like this site, am a 🚧 work in progress.
                        {/* <p> I'm Apoorv Khare, final year undergrad at IIT Roorkee, India. I am a full stack software developer, open source contributor, aspiring technical writer and a wanna be designer.</p>
                        <p> I am constantly looking forward to apply the core concepts to real world problems across science and engineering and coding them at the same time in order to create products which aim to solve peoples problem and focus on user satisfaction. </p> */}
                    <br /><br />
                    </Row>

                {articles_comp}
            </Container>
        )
    }
}

export default Article;