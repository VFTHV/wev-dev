import { useState, useRef, useEffect, Dispatch, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { sideMenu } from '../../../assets/sideMenu';
import { nanoid } from 'nanoid';
import { scrollProps, scrollOffset } from '../../../assets/scrollProps';
import './side-menu.css';

interface SideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
  burgerMenuRef: MutableRefObject<HTMLElement | null>;
}

function SideMenu({ isMenuOpen, setIsMenuOpen, burgerMenuRef }: SideMenuProps) {
  const [_, setIsNavMounted] = useState<boolean>(false);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsNavMounted(true);
  }, []);

  useEffect(() => {
    const closeMenuOnClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', closeMenuOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeMenuOnClickOutside);
    };
  }, [isMenuOpen]);

  let navWidth = 2000; /* <-- intentionally large value so that
  it doesn't appear on the screen at first render */

  if (navRef.current) {
    navWidth = navRef.current.getBoundingClientRect().width;
  }

  return (
    <motion.nav
      className="nav-head"
      animate={{
        x: isMenuOpen ? -navWidth : 0,
      }}
      style={{ right: -navWidth }}
      transition={{ ease: 'easeInOut' }}
      ref={navRef}
      aria-label="navigation side menu"
    >
      <ul className="nav-items">
        {sideMenu.map((item) => {
          const { to, content, className } = item;
          return (
            <li key={nanoid()}>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={`nav-item ${className}`}
                to={to}
                offset={scrollOffset.small}
                {...scrollProps}
                aria-label={`link to ${to}`}
              >
                {content}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

export default SideMenu;
