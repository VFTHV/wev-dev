import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import images from '../assets/images';
import '../styles/carousel.css';

function Carousel() {
  console.log(images);
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        {images.map((image) => {
          return (
            <motion.div>
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
