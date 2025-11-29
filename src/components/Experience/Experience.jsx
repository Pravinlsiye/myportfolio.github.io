import WorkIcon from '@mui/icons-material/Work'
import { experience } from '../../portfolio.js'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__timeline'>
        {experience.map((exp) => (
          <div key={exp.company} className='experience__item'>
            <div className='experience__icon'>
              <WorkIcon />
            </div>
            <div className='experience__content'>
              <div className='experience__header'>
                <h3 className='experience__role'>{exp.role}</h3>
                <span className='experience__duration'>{exp.duration}</span>
              </div>
              <p className='experience__company'>
                {exp.company} • {exp.location}
              </p>
              <ul className='experience__highlights'>
                {exp.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

