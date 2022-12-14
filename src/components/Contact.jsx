import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// images
import contactImg from '../assets/img/contact-img.svg'

// styles
import './contact.css'

export default function Contact() {
  const intialFormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(intialFormDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setButtonText('Sending...')

    let res = await fetch(
      'https://bgfranks-portfolio-server.herokuapp.com/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      }
    )

    setButtonText('Send')

    let result = await res.json()

    setFormDetails(intialFormDetails)

    if (result.code === 200) {
      setStatus({ success: true, message: 'Message Sent Successfully' })

      setTimeout(() => setStatus({}), 2000)
    } else {
      setStatus({
        success: false,
        message: 'Something whent wrong. Please try again later',
      })
      setTimeout(() => setStatus({}), 2000)
    }
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    placeholder='Email'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone Number'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows='6'
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                  {status.message && (
                    <Col className='status-message'>
                      <p
                        className={
                          status.success === false ? 'danger' : 'success'
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
