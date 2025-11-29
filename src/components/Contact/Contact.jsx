import { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { contact } from '../../portfolio.js'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  if (!contact.email) return null

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      
      <div className='contact__info'>
        {contact.location && (
          <div className='contact__item'>
            <LocationOnIcon />
            <span>{contact.location}</span>
          </div>
        )}
        {contact.phone && (
          <div className='contact__item'>
            <PhoneIcon />
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
        )}
        {contact.email && (
          <div className='contact__item'>
            <EmailIcon />
            <span>{contact.email}</span>
          </div>
        )}
      </div>

      <div className='contact__buttons'>
        <a 
          href={`mailto:${contact.email}`}
          className='btn btn--outline'
        >
          Email me
        </a>
        <button 
          onClick={copyEmail}
          className='btn btn--outline'
        >
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
    </section>
  )
}

export default Contact
