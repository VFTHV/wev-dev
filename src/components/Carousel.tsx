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
    <motion.div
      ref={carousel}
      style={{
        cursor: 'grab',
        width: '100%',
        overflow: 'hidden',
        // backgroundColor: 'pink',
      }}
      // className='carousel'
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: width }}
        // className="inner-carousel"
        style={{
          // backgroundColor: 'pink',
          display: 'flex',
          width: 'max-content',
          padding: 0,
          margin: 0,
        }}
      >
        {images.map((image, index) => {
          return (
            <motion.div
              // className="item"
              key={index}
              style={{
                height: '5rem',
                padding: '1rem',
                // backgroundColor: 'red',
                margin: '5px',
              }}
            >
              <img
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
                src={image}
                alt="partners image"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
