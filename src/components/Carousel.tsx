import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/carousel.css';

function Carousel() {
  const images = ['/bh2.png', '/tgt.png', 'ginnovo.png', 'ahws.png', 'klx.png'];
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      const { offsetWidth, scrollWidth } = carousel.current;
      console.log(offsetWidth, scrollWidth);
      const newWidth = offsetWidth - scrollWidth;
      setWidth(newWidth);
    }
  }, []);

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: width }}
        className="inner-carousel"
      >
        {images.map((image, index) => {
          return (
            <motion.div className="item" key={index}>
              <img src={image} alt="partners image" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
