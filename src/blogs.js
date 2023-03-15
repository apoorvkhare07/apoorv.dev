import React, {Component} from 'react';
import './index.css';
import {Col, Row, Container} from 'react-bootstrap';
import ArticleList from './articles-list.js'
import Post from './components/Post'

class Blogs extends Component {
    render() {
      const postData = {
        'heading': 'HEAD',
        'description': 'DESC', 
        'tags': ['a', 'b']
      }
      return (
        <Container fluid className="banner">

                    <Col lg= {12} xs = {10} className="intro">
                      <Row className='subHead'>
                        <h3 style={{width: '10%'}}> blogs </h3> 
                        <hr className='hrLine' />
                      </Row>
                      <Row>
                        I don't write much so I started this blog with the express goal of motivating myself to write more often. Here I ramble about my exploits with software development, my side projects (only the interesting ones) and <br/> my work in open-source.
                        <br /> <br /> <br /> 
                        <Row className='subHead'>
                        <h3 style={{width: '22%'}}> Recent writings </h3> 
                        <hr className='hrLine' />
                      </Row>
                      <br /> <br /> 
                      </Row>
                        <div className='projectPanel'>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                          <Post postData={postData}/>
                        </div>
                    </Col>

            </Container>
    );
    }
  }

export default Blogs;