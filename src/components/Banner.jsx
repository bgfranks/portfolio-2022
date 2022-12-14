import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import TrackVisibility from 'react-on-screen'

// images
import headerImg from '../assets/img/header-img.svg'

// styles
import './banner.css'
import 'animate.css'

export default function Banner() {
  const wordRotate = ['Web Developer', 'Musician', 'Gamer', 'Father']
  const period = 2000

  const [arrayIndex, setArrayIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = arrayIndex % wordRotate.length
    let fullText = wordRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setArrayIndex(arrayIndex + 1)
      setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : 'hidden'
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>I'm Brandon Franks</h1>
                  <h2>
                    {`I'm a `} <span className='wrap'>{text}</span>
                  </h2>
                  <button>
                    <a href='#connect'>
                      Let's Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
