import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Post from "./Post";

const ProjectPanel = (props) => {
    const projects = props.projectData.map((row,index) => {
        return (
            <Post postData={row}/>
        )
    })
    return (
        <div>
            <Container fluid className="banner">
            <Col lg= {12} xs = {10} className="intro">
                      <Row className='subHead'>
                        <h3 style={{width: '10%'}}> projects </h3> 
                        <hr className='hrLine' />
                      </Row>
                      <div className='projectPanel'>
                      {projects}
                      </div>
                    </Col>
            </Container>
        </div>
    )
}

export default ProjectPanel;