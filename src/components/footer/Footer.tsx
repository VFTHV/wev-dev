import { YnVDevLogo } from '../YnVDevLogo';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

import './footer.css';

function Footer() {
  return (
    <footer className="footer container">
      <YnVDevLogo />
      <div className="icons-wrapper" aria-label="our social networks links">
        <a href="https://github.com/VFTHV" className="icon">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/vadimfthv/" className="icon">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vadim-fthv/" className="icon">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
