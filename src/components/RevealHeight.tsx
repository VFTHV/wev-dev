import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface RevealHeightProps {
  children: JSX.Element;
  span?: string;
}

export default function RevealHeight({ children, span }: RevealHeightProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  });

  const height = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    ['100%', '50%', '3%']
  );

  return (
    <div
      ref={targetRef}
      className="tech"
      style={{
        color: 'rgb(9, 232, 94)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
      }}
    >
      {children} <span style={{ fontSize: '1.3rem' }}>{span}</span>
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: 'rgb(9, 232, 94)',
          width: '100%',
          height,
        }}
      ></motion.div>
    </div>
  );
}
