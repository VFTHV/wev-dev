import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { DiJavascript } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { AiOutlineArrowDown } from 'react-icons/ai';
import '../styles/home.css';

function Home() {
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
      'rgba(122, 137, 140, 0.7)',
      'rgba(86,129,110, 0.7)',
      'rgba(85,165,128, 0.7)',
      'rgba(60,189,122, 0.7)',
      'rgba(9, 232, 94, 0.7)',
    ]
  );

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const jsxTagY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const neuronY = useTransform(scrollYProgress, [0, 1], [-55, 25]);

  return (
    <section className="home container">
      <div className="home-wrapper">
        <div className="hero-img">
          <img src="avatar.png" alt="web developer image" />
        </div>
        <h1 className="h1">
          I'm a web developer based in Sugar Land, Tx, specializing in
          React+Redux
        </h1>
        <div className="scroll-down">
          <p>Scroll Down</p>
          <div className="down">
            <AiOutlineArrowDown />
          </div>
        </div>
      </div>
      <motion.div ref={targetRef} className="figures">
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
    </section>
  );
}

export default Home;
