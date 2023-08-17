import { useRef } from 'react';
import { useState } from 'react';
import { YnVDevLogo } from './YnVDevLogo';
import { Squash as Hamburger } from 'hamburger-react';
import '../styles/nav-header.css';
import SideMenu from './SideMenu';

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header container">
        <YnVDevLogo />
      </header>
      <div className="hamburger" ref={menuRef}>
        <Hamburger
          color="rgb(9, 232, 94)"
          size={25}
          toggle={toggleMenu}
          toggled={isMenuOpen}
        />
      </div>
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        burgerMenuRef={menuRef}
      />
    </>
  );
}

export default NavHeader;
