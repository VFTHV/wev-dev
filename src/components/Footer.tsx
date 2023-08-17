import { YnVDevLogo } from './SVGs';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer container">
      <YnVDevLogo height={26} className="footer-logo" />
      <div className="icons-wrapper">
        <a href="#" className="icon">
          <BsGithub />
        </a>
        <a href="#" className="icon">
          <BsInstagram />
        </a>
        <a href="#" className="icon">
          <BsLinkedin />
        </a>
        <hr />
      </div>
    </footer>
  );
}

export default Footer;
