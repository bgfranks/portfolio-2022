import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// images
import colorSharp from '../assets/img/color-sharp.png'
import hmtlLogo from '../assets/img/html-logo.png'
import reactLogo from '../assets/img/react-logo.png'
import nextLogo from '../assets/img/next-logo.png'
import tailwindLogo from '../assets/img/tailwind-logo.png'
import cssLogo from '../assets/img/css-logo.png'
import firebaseLogo from '../assets/img/firebase-logo.png'

// styles
import './skills.css'

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-box'>
              <h2>Skills</h2>
              <p>
                I'm a Front End Web Developer from Raleigh, North Carolina. I
                like to focus on using React.js or Next.js for my front end
                projects. I have experience with React, Next, TailwindCSS, and
                Firebase for database storage and authentication.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={reactLogo} alt='React.js' />
                  <h5>React.js</h5>
                </div>
                <div className='item'>
                  <img src={nextLogo} alt='Next.js' />
                  <h5>Next.js</h5>
                </div>
                <div className='item'>
                  <img src={tailwindLogo} alt='TailwindCSS' />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className='item'>
                  <img src={hmtlLogo} alt='HTML' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={cssLogo} alt='CSS' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={firebaseLogo} alt='Firebase' />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='Cicle' />
    </section>
  )
}
