import { useState } from 'react';
import './top-menu.css';

function TopMenu() {
  const [width, setWidth] = useState(2);

  return (
    <ul className="top-menu">
      <li
        onMouseEnter={() => setWidth(50)}
        onMouseLeave={() => setWidth(0)}
        className="nav-wrapper descr"
      >
        Tech Stack
        <div style={{ width: `${width}%` }} className="border-left"></div>
        <div style={{ width: `${width}%` }} className="border-right"></div>
      </li>
      <li
        onMouseEnter={() => setWidth(50)}
        onMouseLeave={() => setWidth(0)}
        className="nav-wrapper descr"
      >
        Tech Stack
        <div style={{ width: `${width}%` }} className="border-left"></div>
        <div style={{ width: `${width}%` }} className="border-right"></div>
      </li>
      <li
        onMouseEnter={() => setWidth(50)}
        onMouseLeave={() => setWidth(0)}
        className="nav-wrapper descr"
      >
        Tech Stack
        <div style={{ width: `${width}%` }} className="border-left"></div>
        <div style={{ width: `${width}%` }} className="border-right"></div>
      </li>
      <li
        onMouseEnter={() => setWidth(50)}
        onMouseLeave={() => setWidth(0)}
        className="nav-wrapper descr"
      >
        Tech Stack
        <div style={{ width: `${width}%` }} className="border-left"></div>
        <div style={{ width: `${width}%` }} className="border-right"></div>
      </li>
      <li
        onMouseEnter={() => setWidth(50)}
        onMouseLeave={() => setWidth(0)}
        className="nav-wrapper descr"
      >
        Tech Stack
        <div style={{ width: `${width}%` }} className="border-left"></div>
        <div style={{ width: `${width}%` }} className="border-right"></div>
      </li>
    </ul>
  );
}

export default TopMenu;
