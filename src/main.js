import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import me from './static/me.jpg'
import Button from 'react-bootstrap/Button'
import Pdf from './Docs/dev_cv.pdf'
import Typewriter from 'typewriter-effect';



class Main extends Component{
    // bannerColorList = ['#ef46b1', '#d946ef', '#8546ef', '#00ffff', '#40ff00', '#ffbf00']
    bannerColorList = ['#ffd479']
    state = {
        scrolled: false,
        idx: localStorage.getItem('quote_index') || 0,
    }

    quotes = [
      'Also wears many other hats.',
      'Is a computer whisperer.',
      'Designs his own websites.',
      'Crafts new and innovative <s>apps</s> bugs.',
      'Has talked to computers for over half his life.',
      'Writes code; <em>sometimes</em> gets paid for it.',
      'Knows how to exit vim.',
      'Occasionally finishes a side-project.',
    ]

    kaomojis = [
      '(´•ᴗ•`)ノ', 
      '(◕ᴗ◕)◞*',
      '[❛▽❛]ﾉﾟ',
      '[ˇヮˇ]ﾉ',
      '(^◡^)ﾉﾟ',
      '[^ᴗ^]ﾉﾟ',
      '[◕ヮ◕]ﾉ',
      '(ˇ▽ˇ)◞*'


    ]

      componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll)
        localStorage.setItem('quote_index', JSON.stringify((this.state.idx+1)%1))
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

        const handleMouseMove = () => {
          let btn = document.querySelector('.mouse-cursor-gradient-tracking');
        btn.addEventListener('mousemove', e => {
          let rect = e.target.getBoundingClientRect();
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;
          btn.style.setProperty('--x', x + 'px');
          btn.style.setProperty('--y', y + 'px');
        })
      }

        const text = " \
    _                                    _  ____                       *\n \
   / \\    _ __   ___   ___  ____ _   __ | |/ / |__   __ _ _ __ ___ \n \
  / _ \\  | '_ \\ / _ \\ / _ \\| '__\\ \\ / / | ' /| '_ \\ / _` | '__/ _ \\ \n \
 / ___ \\ | |_) | (_) | (_) | |   \\ V /  | . \\| | | | (_| | | |  __/ \n \
/_/   \\_\\   __/ \\___/ \\___/|_|    \\_/   |_|\\_\\_| |_|\\__,_|_|  \\___| \n \
         |_|                                                        \n "

        return (
            <Container fluid className="banner">
                    <Col md={8} lg={8} className= "lead">
                        
                        {/* <h1> Hi, I'm Apoorv </h1> */}
                        
                        <pre dangerouslySetInnerHTML={{__html: text }} className='mouse-cursor-gradient-tracking' style={{color: this.bannerColorList[this.state.idx]}}>
                           
                        
                        </pre>
                        
                        <p>  <span style={{color: "#ffd479", fontWeight: 700}}> Software developer </span> with love for <span style={{color: "#ffd479", fontWeight: 700}}> Startups </span> and <span style={{color: "#ffd479", fontWeight: 700}}>Blockchain</span>.</p>
                        
                        <p className='typeWriter'>
                        <Typewriter
                          options={{
                            strings: this.quotes,
                            autoStart: true,
                            loop: true,
                          }}
                          />
                        </p>
                    </Col>
                       
            </Container>
        )
    }
}

export default Main;