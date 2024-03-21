import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface BorderWrapperProps {
  children: JSX.Element;
  transformEnd?: number;
}

// improve border wrapper
// improve border wrapper
// improve border wrapper
// improve border wrapper
// improve border wrapper
// improve border wrapper
// improve border wrapper

function BorderWrapper({ children, transformEnd }: BorderWrapperProps) {
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

  const end = transformEnd || 0.8;

  const width = useTransform(horizYProgress, [0, end], ['0%', '100%']);
  const height = useTransform(vertYProgress, [0, end], ['0%', '100%']);

  return (
    <div style={{ position: 'relative' }}>
      {children}
      <motion.div
        ref={horizBorderRef}
        style={{
          width,
          position: 'absolute',
          border: 'solid 1px rgb(9,232,94)',
          boxShadow: '0 0 5px 1px rgb(9,232,94)',
          top: 0,
          left: 0,
        }}
      ></motion.div>
      <motion.div
        ref={vertBorderRef}
        style={{
          height,
          position: 'absolute',
          border: 'solid 1px rgb(9,232,94)',
          boxShadow: '0 0 5px 1px rgb(9,232,94)',
          top: 0,
          right: 0,
        }}
      ></motion.div>
      <motion.div
        style={{
          height,
          position: 'absolute',
          border: 'solid 1px rgb(9,232,94)',
          boxShadow: '0 0 5px 1px rgb(9,232,94)',
          top: 0,
          left: 0,
        }}
      ></motion.div>
      <motion.div
        style={{
          width,
          position: 'absolute',
          border: 'solid 1px rgb(9,232,94)',
          boxShadow: '0 0 5px 1px rgb(9,232,94)',
          bottom: 0,
          left: 0,
        }}
      ></motion.div>
    </div>
  );
}

export default BorderWrapper;
