import { useState, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { BiDownArrow } from 'react-icons/bi';
import './faq.css';

interface FAQprops {
  children: JSX.Element;
  questionText: string;
}

function FAQ({ children, questionText }: FAQprops) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start'],
  });
  const width = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  return (
    <div className="question-wrapper">
      <div className="question" onClick={toggleOpen}>
        <h3 className="h3 q-text">{questionText}</h3>
        <motion.div
          animate={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
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
          className="descr answer"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
