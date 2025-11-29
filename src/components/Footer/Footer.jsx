import VisibilityIcon from '@mui/icons-material/Visibility'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './Footer.css'

/* eslint-disable no-undef */
const deployId = typeof __DEPLOY_DATE__ !== 'undefined' ? __DEPLOY_DATE__ : 'dev'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__visitor'>
      <div className='footer__visitor-card'>
        <VisibilityIcon className='footer__visitor-icon' />
        <img 
          src={`https://visitor-badge.laobi.icu/badge?page_id=pravinlsiye.myportfolio.${deployId}&left_color=%23ffffff00&right_color=%23ffffff00&left_text=`}
          alt='Views'
          className='footer__visitor-badge'
        />
      </div>
    </div>
    
    <div className='footer__credit'>
      <span>Made with</span>
      <FavoriteIcon className='footer__heart' />
      <span>by</span>
      <a
        href='https://github.com/Pravinlsiye'
        className='link footer__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        Pravin
      </a>
    </div>
  </footer>
)

export default Footer
