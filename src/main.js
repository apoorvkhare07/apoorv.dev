import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import me from './static/me.jpg'
import Button from 'react-bootstrap/Button'
import Pdf from './Docs/dev_cv.pdf'

class Main extends Component{
    state = {
        scrolled: false,
      }

      componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll)
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll)
      }

      navOnScroll = () => {
        if (window.scrollY > 40) {
          this.setState({ scrolled: true })
        } else {
          this.setState({ scrolled: false })
        }
      }

      render() {
        const { scrolled } = this.state
        return (
            <Container fluid className= { scrolled ? "banner-2" : "banner" }>

                    <Col md={8} lg={8} className= "lead">
                        <h1> Hi, I'm Apoorv </h1>
                        <p> I'm a software developer working towards building <span style={{color: "#ffd479"}}>cross‑platform </span> and <span style={{color: "#ffd479"}}>full‑stack </span> web and mobile apps, <span style={{color: "#ffd479"}}> opensource </span> projects and <span style={{color: "#ffd479"}}> writing </span> about new technologies.</p>
                        <p className = "call-to-act">
                        <a href={Pdf} target="_blank"><button className="email-cta-2">View CV</button></a>
                        <button onclick="location.href='mailto:apoorvkhare007@gmail.com" className="email-cta">Email me</button>
                        </p>
                    </Col>

                    <Col md = {4} lg = {4} className="elevator">
                        <img src = {me} className="my-image" />
                        <p>
                            I’m currently looking for internship in software development. Get in touch if you have an interesting project to discuss. I'm around.

                        </p>
                        <a href={Pdf} target="_blank"><button className="email-cta-2">View CV</button></a>
                        <a target = "_blank" href="mailto:apoorvkhare007@gmail.com" ><button className="email-cta">Email me</button></a>


                    </Col>

            </Container>
        )
    }
}

export default Main;