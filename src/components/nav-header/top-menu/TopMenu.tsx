import TopMenuItem from './TopMenuItem';
import { sideMenu } from '../../../assets/sideMenu';
import { Link } from 'react-scroll';
import { scrollProps, scrollOffset } from '../../../assets/scrollProps';
import './top-menu.css';

function TopMenu() {
  return (
    <ul className="top-menu">
      {sideMenu.map((item, i, arr) => {
        const isLastItem = i === arr.length - 1;

        const { to, content, className } = item;
        return (
          <Link
            to={to}
            {...scrollProps}
            offset={scrollOffset.large}
            aria-label={`link to ${to}`}
          >
            <TopMenuItem className={className} isLastItem={isLastItem}>
              {content}
            </TopMenuItem>
          </Link>
        );
      })}
    </ul>
  );
}

export default TopMenu;
