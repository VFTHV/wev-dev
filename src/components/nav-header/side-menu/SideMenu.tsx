import { useState, useRef, useEffect, Dispatch, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { sideMenu } from '../../../assets/sideMenu';
import { nanoid } from 'nanoid';
import './side-menu.css';

interface SideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
  burgerMenuRef: MutableRefObject<HTMLElement | null>;
}

function SideMenu({ isMenuOpen, setIsMenuOpen, burgerMenuRef }: SideMenuProps) {
  const [_, setIsNavMounted] = useState(false);

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

  const scrollProps = {
    spy: true,
    smooth: 'easeInOutQuint',
    duration: 1600,
  };
  const offset = -4 * 16;

  return (
    <motion.nav
      className="nav-head"
      animate={{
        x: isMenuOpen ? -navWidth : 0,
      }}
      style={{ right: -navWidth }}
      transition={{ ease: 'easeInOut' }}
      ref={navRef}
    >
      <ul className="nav-items">
        {sideMenu.map((item) => {
          const { to, content } = item;
          return (
            <li key={nanoid()}>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="nav-item"
                to={to}
                offset={offset}
                {...scrollProps}
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
