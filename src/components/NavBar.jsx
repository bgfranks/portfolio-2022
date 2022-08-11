import { useState, useEffect } from 'react'

// bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// styles
import './navbar.css'

// images
import BfLogo from '../assets/img/bf-logo.svg'
import LinkedInIcon from '../assets/img/linkedin-icon.svg'
import FacebookIcon from '../assets/img/facebook-icon.svg'
import GithubIcon from '../assets/img/github-icon.svg'

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // checks to see if the window Y was scrolled
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    // removes event listener on unmount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const updateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={BfLogo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('hom')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => updateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/brandon-franks-830b23182/'>
                <img src={LinkedInIcon} alt='LinkedIn' className='linkedin' />
              </a>
              <a href='https://www.facebook.com/brandon.franks.52/'>
                <img src={FacebookIcon} alt='Facebook' className='facebook' />
              </a>
              <a href='https://github.com/bgfranks'>
                <img src={GithubIcon} alt='Github' className='github' />
              </a>
            </div>
            <button className='vvd'>
              <a href='#connect'>
                <span>Let's Connect</span>
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
