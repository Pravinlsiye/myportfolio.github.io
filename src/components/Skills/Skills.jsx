import { skills, certifications, publications } from '../../portfolio.js'
import VerifiedIcon from '@mui/icons-material/Verified'
import ArticleIcon from '@mui/icons-material/Article'
import LaunchIcon from '@mui/icons-material/Launch'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={skill} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>

      {certifications && certifications.length > 0 && (
        <div className='skills__certifications'>
          <h3 className='skills__subtitle'>Certifications</h3>
          <div className='skills__cert-list'>
            {certifications.map((cert) => (
              <a 
                key={cert.code} 
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
                className='skills__cert'
              >
                <VerifiedIcon />
                <span>{cert.name}</span>
                <span className='skills__cert-code'>{cert.code}</span>
                <LaunchIcon className='skills__cert-link' />
              </a>
            ))}
          </div>
        </div>
      )}

      {publications && publications.length > 0 && (
        <div className='skills__publications'>
          <h3 className='skills__subtitle'>Publications</h3>
          <div className='skills__pub-list'>
            {publications.map((pub) => (
              <a 
                key={pub.title} 
                href={pub.link}
                target='_blank'
                rel='noopener noreferrer'
                className='skills__pub'
              >
                <ArticleIcon />
                <div className='skills__pub-info'>
                  <span className='skills__pub-title'>{pub.title}</span>
                  <span className='skills__pub-meta'>{pub.publisher} • {pub.year}</span>
                </div>
                <LaunchIcon className='skills__pub-link' />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills
