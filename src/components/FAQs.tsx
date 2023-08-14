import { useState, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { BiDownArrow } from 'react-icons/bi';
import '../styles/faqs.css';

function FAQs() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start'],
  });
  const width = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  return (
    <section className="faqs container">
      <h2 className="h2">FAQs</h2>
      <p className="descr">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cum,
        nobis reprehenderit a aspernatur dolores eveniet quis eligendi?
        Praesentium, enim?
      </p>
      <div className="question-wrapper">
        <div className="question">
          <h3 className="h3">What techonoly stack do you use</h3>
          <motion.div
            animate={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={toggleOpen}
            className="arrow-wrapper"
          >
            <BiDownArrow />
          </motion.div>
          <motion.div
            ref={ref}
            style={{ width }}
            className="border-top"
          ></motion.div>
        </div>
        <div className="answer-wrapper">
          <motion.div
            animate={{
              height: isOpen ? 'min-content' : 0,
            }}
            className="answer descr"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            laudantium esse tempora reprehenderit! Odit nobis cupiditate soluta
            totam corporis. Cum?
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
