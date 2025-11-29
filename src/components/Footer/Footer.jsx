import './Footer.css'

/* eslint-disable no-undef */
const deployId = typeof __DEPLOY_DATE__ !== 'undefined' ? __DEPLOY_DATE__ : 'dev'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/Pravinlsiye'
      className='link footer__link'
    >
      Created By Pravin
    </a>
    <div className='footer__visitor'>
      <img 
        src={`https://visitor-badge.laobi.icu/badge?page_id=pravinlsiye.myportfolio.${deployId}&left_color=%23333&right_color=%231a73e8&left_text=Visitors`}
        alt='Visitor Count'
      />
      <p className='footer__deploy-date'>Since last deployed</p>
    </div>
  </footer>
)

export default Footer
