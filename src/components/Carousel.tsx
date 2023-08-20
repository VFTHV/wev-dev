import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import images from '../assets/images';
import '../styles/carousel.css';
import { nanoid } from 'nanoid';

function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      // setTimeout(() => {
      const { offsetWidth, scrollWidth } = carousel.current;
      console.log(offsetWidth, scrollWidth);
      const newWidth = offsetWidth - scrollWidth;
      setWidth(newWidth);
      // }, 200);
    }
  }, []);

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: width }}
        className="inner-carousel"
      >
        {images.map((image) => {
          return (
            <motion.div className="item" key={nanoid()}>
              <img src={image} alt="partners image" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
