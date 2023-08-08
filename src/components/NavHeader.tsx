import { useState } from 'react';
import { Logo } from './SVGs';
import { Squash as Hamburger } from 'hamburger-react';
import '../styles/nav-header.css';

function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  console.log(isOpen);

  return (
    <header className="header">
      <div className="header-icon">
        <Logo />
      </div>
      <div className="hamburger">
        <Hamburger
          color="rgb(9, 232, 94)"
          size={25}
          toggle={toggleMenu}
          toggled={isOpen}
        />
      </div>
    </header>
  );
}

export default NavHeader;
