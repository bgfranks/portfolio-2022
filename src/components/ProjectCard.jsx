import { Col } from 'react-bootstrap'

// styles
import './project-card.css'

export default function ProjectCard({
  title,
  description,
  imgUrl,
  githubUrl,
  siteUrl,
}) {
  return (
    <Col sm={10} md={6} lg={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={title} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='btns'>
            <button>
              <a href={githubUrl}>View on Github</a>
            </button>
            <button>
              <a href={siteUrl}>View hosted site</a>
            </button>
          </div>
        </div>
      </div>
    </Col>
  )
}
