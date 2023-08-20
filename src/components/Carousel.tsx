import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/carousel.css';

function Carousel() {
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        <motion.div className="item img1"></motion.div>
        <motion.div className="item img2"></motion.div>
        <motion.div className="item img3"></motion.div>
        <motion.div className="item img4"></motion.div>
        <motion.div className="item img5"></motion.div>
        <motion.div className="item img6"></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
