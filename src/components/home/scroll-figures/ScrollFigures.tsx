import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { DiJavascript } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import './scroll-figures.css';

function ScrollFigures() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const jsxTagRef = useRef<HTMLDivElement>(null);
  const neuronRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(122, 137, 140, 0.85)',
      'rgba(86,129,110, 0.85)',
      'rgba(85,165,128, 0.85)',
      'rgba(60,189,122, 0.85)',
      'rgba(9, 232, 94, 0.85)',
    ]
  );

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const jsxTagY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const neuronY = useTransform(scrollYProgress, [0, 1], [-55, 25]);

  return (
    <motion.div
      ref={targetRef}
      className="figures"
      aria-label="technologies we work with"
    >
      <motion.div ref={cubeRef} style={{ y, color: color }} className="icon">
        <TbBrandTypescript />
      </motion.div>
      <motion.div
        ref={globeRef}
        style={{ y: globeY, color: color }}
        className="icon"
      >
        <TbBrandRedux />
      </motion.div>
      <motion.div
        ref={jsxTagRef}
        style={{ y: jsxTagY, color: color }}
        className="icon"
      >
        <DiJavascript />
      </motion.div>
      <motion.div
        ref={neuronRef}
        style={{ y: neuronY, color: color }}
        className="icon"
      >
        <FaReact />
      </motion.div>
    </motion.div>
  );
}

export default ScrollFigures;
