import React, {Component} from 'react';
import './index.css';
import {Col, Row, Container} from 'react-bootstrap';
import ArticleList from './articles-list.js'

class Blogs extends Component {
    render() {
      return (
        <Container fluid className="banner">

                    <Col lg= {10} xs = {10} className="intro">
                        <Row>
                        <h1> Blogs </h1>
                            <p> Here are some of the blogs I wrote, mostly on various life experiences, both technical and non-technical.</p>
                            <p> PS: These are not technical tutorials which would help you in building your next project but experiences and learning which a developer might relate to </p>
                        </Row>

                        <Row>
                        <ArticleList/>
                        </Row>

                    </Col>

            </Container>
    );
    }
  }

export default Blogs;