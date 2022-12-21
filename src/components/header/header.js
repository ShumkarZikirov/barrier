import './header.scss'
import { FaWhatsapp,FaInstagram,FaTelegramPlane } from 'react-icons/fa';
const Header = () => {
  return(
      <div className={'header'}>
          <div className={'header-logo'}>
              <h1>Smart Barrier ITEK</h1>
          </div>
          <ul className={'header-link'}>
            <li><a className={'first'}>+996 555 555 555</a></li>
             <li><a href={'#'}><FaWhatsapp/></a></li>
              <li><a href={'#'}><FaInstagram/></a></li>
              <li><a href={'#'}><FaTelegramPlane/></a></li>
          </ul>
      </div>
  )
}
export default Header