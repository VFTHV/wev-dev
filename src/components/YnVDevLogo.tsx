import { Link } from 'react-scroll';
import { scrollProps } from '../assets/scrollProps';
import '../styles/ynv-dev-logo.css';

interface YnVDevLogo {
  fontSize?: number;
}

export const YnVDevLogo = ({ fontSize }: YnVDevLogo) => {
  const size = fontSize || 34;
  return (
    <div style={{ fontSize: `${size}px` }} className="logo">
      <Link {...scrollProps} to="home" offset={-100}>
        <span className="ynv">YnV</span>
        <span className="dev">Dev</span>
      </Link>
    </div>
  );
};
