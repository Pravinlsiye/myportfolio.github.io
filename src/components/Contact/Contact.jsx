import { useState } from 'react'
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
      <p className='contact__email'>{contact.email}</p>
    </section>
  )
}

export default Contact
