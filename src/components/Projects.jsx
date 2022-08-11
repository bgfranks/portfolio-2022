import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'

// components
import ProjectCard from './ProjectCard'

// styles
import './projects.css'

// images
import theDojo from '../assets/img/the-dojo.png'
import expensely from '../assets/img/expensely.png'
import googleClone from '../assets/img/google-clone.png'
import edgeledger from '../assets/img/edgeledger.png'
import cssHamburger from '../assets/img/css-hamburger-menu.png'
import comingSoon from '../assets/img/coming-soon.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

export default function Projects() {
  const reactProjects = [
    {
      title: 'Google Clone',
      description:
        'A clone of the Google search using the Google Search Engine API and Tailwind CSS for styling',
      imgUrl: googleClone,
      githubUrl: 'https://github.com/bgfranks/google',
      siteUrl: 'https://google-l8614igfb-bgfranks.vercel.app/',
    },
    {
      title: 'Expensely',
      description:
        'A simple expense tracker using Firebase to handle auth and database storage and SASS for styling',
      imgUrl: expensely,
      githubUrl: 'https://github.com/bgfranks/expense-tracker',
      siteUrl: 'https://expensely-c2137.firebaseapp.com/login',
    },
    {
      title: 'The Dojo',
      description:
        'A project Management site that uses Firebase to handle auth and database storage',
      imgUrl: theDojo,
      githubUrl: 'https://github.com/bgfranks/thedojo',
      siteUrl: 'https://thedojo-a7efd.firebaseapp.com/login',
    },
  ]

  const htmlProjects = [
    {
      title: 'EdgeLedger',
      description: 'A mock finance site using basic HTML and CSS',
      imgUrl: edgeledger,
      githubUrl: 'https://github.com/bgfranks/edgeledger',
      siteUrl: 'https://bgfranks.github.io/edgeledger/',
    },
    {
      title: 'CSS Hamburger Menu',
      description: 'A hambuger menu styled only with HTML and CSS',
      imgUrl: cssHamburger,
      githubUrl: 'https://github.com/bgfranks/purecss_hambugermenu',
      siteUrl: 'https://bgfranks.github.io/purecss_hambugermenu/',
    },
  ]

  const vueProjects = [
    {
      title: 'Projects coming soon!',
      description:
        'Vue projects are coming! Will post some as soon as they are ready!',
      imgUrl: comingSoon,
      githubUrl: null,
      siteUrl: null,
    },
    {
      title: 'Projects coming soon!',
      description:
        'Vue projects are coming! Will post some as soon as they are ready!',
      imgUrl: comingSoon,
      githubUrl: null,
      siteUrl: null,
    },
    {
      title: 'Projects coming soon!',
      description:
        'Vue projects are coming! Will post some as soon as they are ready!',
      imgUrl: comingSoon,
      githubUrl: null,
      siteUrl: null,
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Below are a list of a few of my favorite projects I have worked
              on. I will be updating my projects often as I develop more and get
              more experience with different frameworks.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='tabs'
                defaultActiveKey='/home'
                className='nav-pills mb-5 justify-content-center align-items-center'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>HTML</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Vue</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {reactProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          imgUrl={project.imgUrl}
                          description={project.description}
                          githubUrl={project.githubUrl}
                          siteUrl={project.siteUrl}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {htmlProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          imgUrl={project.imgUrl}
                          description={project.description}
                          githubUrl={project.githubUrl}
                          siteUrl={project.siteUrl}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                    {vueProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          imgUrl={project.imgUrl}
                          description={project.description}
                          githubUrl={project.githubUrl}
                          siteUrl={project.siteUrl}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='Circle' />
    </section>
  )
}
