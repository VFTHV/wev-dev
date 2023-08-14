import { useState, useRef, useEffect, Dispatch, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/side-menu.css';

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

  let navWidth = 300;

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
      initial={{ right: '-18rem' }}
      transition={{ ease: 'easeInOut' }}
      ref={navRef}
    >
      <ul className="nav-items">
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item"
            to="technologies"
            offset={offset}
            {...scrollProps}
          >
            Tech Stack
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item"
            to="portfolio"
            offset={offset}
            {...scrollProps}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item"
            to="testimonials"
            offset={offset}
            {...scrollProps}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item"
            to="faqs"
            offset={offset}
            {...scrollProps}
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item cta"
            to="contact"
            offset={offset}
            {...scrollProps}
          >
            Get in touch
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default SideMenu;
