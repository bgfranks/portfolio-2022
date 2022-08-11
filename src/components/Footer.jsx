import { Container, Row, Col } from 'react-bootstrap'

// images
import logo from '../assets/img/bf-logo.svg'
import LinkedInIcon from '../assets/img/linkedin-icon.svg'
import FacebookIcon from '../assets/img/facebook-icon.svg'
import GithubIcon from '../assets/img/github-icon.svg'

// styles
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          <Col sm={6}>
            <img src={logo} alt='Brandon Franks' />
          </Col>
          <Col className='text-center text-sm-end'>
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
            <p>CopyRight Brandon Franks 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
