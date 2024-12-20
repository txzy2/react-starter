import React from 'react';
import {motion} from 'framer-motion';


interface RoteteProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number,
  delay?: number;
}

const Rotete: React.FC<RoteteProps> = ({
  children,
  className,
  rotate = 360,
  delay = 1.5,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ rotate: 0, scale: 0.5 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        duration: 2, 
        ease: "easeInOut", 
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default Rotete;
