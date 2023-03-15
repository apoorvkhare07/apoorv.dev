import React, {Component} from 'react';
import '../index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
import {Col, Row, Container} from 'react-bootstrap';
import List from '../Table.js';
import Contact from '../Contact'
import githublogo from '../static/icons8-github.svg'
import twitterlogo from '../static/icons8-twitter.svg'
import linkedinlogo from '../static/icons8-linkedin.svg'
import maillogo from '../static/icons8-mail.svg'

class About extends Component {
    render() {
      return (
        <Container fluid className="banner">

                    <Col lg={12} xs = {10} className= "intro">
                    <Row>
                        {/* <h1> about me </h1> */}
                    </Row>
                    <Row className='subHead'>
                    <h3 style={{width: '20%'}}> what do I do? </h3> 
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

                    <Row className='subHead'>
                    <h3 style={{width: '6%'}}> bio </h3> 
                    <hr className='hrLine' />
                    </Row>
                    <Row>
                    I write code as a hobby and also as a full-time job. Getting paid to do what I love feels pretty awesome. 10/10 would definitely recommend.
                    <br /><br />
                    All the code I write for joy, and most of what I write at work, is open-source. It's all there on my GitHub profile↗. If you see something you like (including this site↗), consider starring. I'd appreciate that sweet dopamine. If you see something you don't like very much, consider filing an issue.
                    <br /><br />
                    For ~54% of my life, I've worked on all aspects of software development, from planning to deployment, from backend to frontend, and everything in between. I've even dabbled a little bit in UX/UI design and feel like I'm pretty good at it, but you're free to judge for yourself. For context, I designed this site.
                    <br /><br />
                    </Row>

                    <Row className='subHead'>
                    <h3 style={{width: '10%'}}> contact </h3> 
                    <hr className='hrLine' />
                    </Row>
                    <Row>
                    I'm always open to collaborating on new and exciting ideas. If you have one, drop me and line and we will connect.
                    <br /><br />
                    <ul>
                      <li> <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="mr-ch inline-block" ><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg> <a href="#"> github </a></li>
                      <li> <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="mr-ch inline-block" ><path fill="currentColor" d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path></svg> <a href="#">twitter </a></li>
                      <li> <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="mr-ch inline-block" ><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> <a href="#">linkedin </a></li>
                      <li> <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="mr-ch inline-block" ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"></path></svg> <a href="#">email </a></li>
                      </ul>
                    <br /><br />
                    </Row>

                    </Col>

            </Container>
    );
    }
  }

export default About;