
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    return (
   <div className='footer_container' >
       <div className='footer__inner' > 
           <div className= "footer__social_icons">
           <ul>
           <li> <SocialIcon url='https://www.facebook.com/pg/Redzdre/photos/?ref=page_internal' target='_blank' /></li>
           <li> <SocialIcon url='https://www.instagram.com/_monjelly_/' target='_blank'/></li>
           <li> <SocialIcon url='https://www.linkedin.com/in/michele-mongelli-creative/'target='_blank' /></li>
          </ul>
          <div className='footer__menu_one'>
              <ul>
              <li>Check us</li>
              <li>Follow us </li> 
              <li>Contact us</li>
              </ul>
          </div>
    
          </div>
      </div> 
   </div>
       
    );
  };
  export default Footer;
