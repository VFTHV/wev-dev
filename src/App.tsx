import { ReactTech, TypeScripTech, NodeTech } from './components/SVGs';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { GoGlobe } from 'react-icons/go';
import { SiRedux } from 'react-icons/si';
import './styles/home.css';
import NavHeader from './components/NavHeader';
import { useScroll, useTransform, motion } from 'framer-motion';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { DiJavascript } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { useRef } from 'react';

console.log(GoGlobe);

function App() {
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
      'rgb(122, 137, 140)',
      'rgb(86,129,110)',
      'rgb(85,165,128)',
      'rgb(60,189,122)',
      'rgb(9, 232, 94)',
    ]
  );

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const jsxTagY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const neuronY = useTransform(scrollYProgress, [0, 1], [-55, 25]);

  return (
    <div className="container">
      <NavHeader />
      <section className="home">
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
          <motion.div
            ref={cubeRef}
            style={{ y, color: color }}
            className="icon"
          >
            <HiOutlineCubeTransparent />
          </motion.div>
          <motion.div
            ref={globeRef}
            style={{ y: globeY, color: color }}
            className="icon"
          >
            <GoGlobe />
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
      <section className="technologies" style={{ height: '200vh' }}>
        <h2 className="h2">Technologies I work with</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          provident esse distinctio, est minima quidem dolor laboriosam maxime
          reprehenderit autem.
        </p>
        <div className="techs">
          <div className="tech">
            <ReactTech />
          </div>
          <div className="tech">
            <TypeScripTech />
          </div>
          <div className="tech">
            <NodeTech />
          </div>
          <div className="tech">
            <SiRedux />
          </div>
        </div>
      </section>
      <section className="projects">
        <h2 className="h2">Selected Projects</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </div>
  );
}

export default App;
