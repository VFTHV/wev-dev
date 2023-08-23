import { useState } from 'react';

interface TopMenuItemProps {
  children: string;
  isLastItem?: boolean;
  className?: string;
}

function TopMenuItem({ children, isLastItem, className }: TopMenuItemProps) {
  const [width, setWidth] = useState(2);

  return (
    <li
      onMouseEnter={() => setWidth(50)}
      onMouseLeave={() => setWidth(2)}
      style={{
        cursor: 'pointer',
        height: '100%',
        width: 'max-content',
        marginInline: '1rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginRight: isLastItem ? 0 : undefined,
      }}
    >
      <div
        style={{
          padding: '0.5rem',
          // border: '1px solid red',
          borderRadius: '3px',
          backgroundColor: className && '#fefdfb',
          color: className && '#1b1b1b',
          fontWeight: className && 600,
        }}
        className="descr"
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: `${width}%`,
          boxShadow: '0 0 2px 2px rgb(9, 232, 94)',
          transition: 'width 0.3s ease-in-out 0s',
          right: '50%',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: `${width}%`,
          boxShadow: '0 0 2px 2px rgb(9, 232, 94)',
          transition: 'width 0.3s ease-in-out 0s',
          left: '50%',
        }}
      ></div>
    </li>
  );
}

export default TopMenuItem;
