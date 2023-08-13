import '../styles/portfolio.css';

import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

function Portfolio() {
  const horizBorderRef = useRef<HTMLDivElement>(null);
  const vertBorderRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: horizYProgress } = useScroll({
    target: horizBorderRef,
    offset: ['start end', 'start'],
  });
  const { scrollYProgress: vertYProgress } = useScroll({
    target: vertBorderRef,
    offset: ['start end', 'start'],
  });

  const width = useTransform(horizYProgress, [0, 0.65], ['0%', '100%']);
  const sideHeight = useTransform(vertYProgress, [0, 0.65], ['0%', '100%']);

  return (
    <section id="portfolio" className="portfolio container">
      <h2 className="h2">Selected Projects</h2>
      <p className="descr">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        laboriosam inventore doloremque minus
      </p>
      <div className="portfolio-wrapper">
        <div className="project">
          <div className="project-wrapper">
            <img src="portfolio.png" alt="Portfolio project image" />
            <div className="project-info">
              <h3 className="h3">Ecommerce Website</h3>
              <p className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quos, magni nihil obcaecati nulla consequatur.
              </p>
              <div className="tech-card-wrapper">
                <div className="tech-card">React</div>
                <div className="tech-card">React</div>
              </div>
              <a href="#">View Project {'>'}</a>
            </div>
          </div>

          <motion.div
            ref={horizBorderRef}
            style={{ width }}
            className="top-border-cover"
          ></motion.div>
          <motion.div
            ref={vertBorderRef}
            style={{ height: sideHeight }}
            className="right-border-cover"
          ></motion.div>
          <motion.div
            style={{ height: sideHeight }}
            className="left-border-cover"
          ></motion.div>
          <motion.div
            style={{ width }}
            className="bottom-border-cover"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
