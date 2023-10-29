import { motion, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  AHWSicon,
  BHicon,
  KLXicon,
  GinnovoIcon,
  TGTicon,
  UNDPicon,
} from '../../SVGs';
import './carousel.css';

function Carousel() {
  const icons = [
    <AHWSicon />,
    <BHicon />,
    <UNDPicon />,
    <KLXicon />,
    <GinnovoIcon />,
    <TGTicon />,
  ];
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      const { offsetWidth, scrollWidth } = carousel.current;
      const newWidth = offsetWidth - scrollWidth;
      setWidth(newWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: carousel,
    offset: ['start end', 'start'],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], [0, width]);

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: width }}
        dragMomentum={false}
        className="inner-carousel"
        style={{ x }}
      >
        {icons.map((icon, index) => {
          return (
            <motion.div className="item" key={index}>
              {icon}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
