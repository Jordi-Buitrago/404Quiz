import { motion as Motion } from 'framer-motion';

export const PaperTape = ({ position = 'top-left', color = 'default' }) => {
  const colorClass = {
    pink: 'tape-strip-pink',
    blue: 'tape-strip-blue',
    yellow: 'tape-strip-yellow',
    green: 'tape-strip-green',
    default: '',
  }[color];

  const positionClass = {
    'top-left': 'tape-top-left',
    'top-right': 'tape-top-right',
    'bottom-left': 'tape-bottom-left',
    'bottom-right': 'tape-bottom-right',
  }[position];

  return (
    <Motion.div
      className={`tape-strip ${colorClass} ${positionClass}`}
      initial={{ rotate: position.includes('left') ? -15 : 15, y: -5 }}
      whileHover={{ 
        rotate: 0, 
        y: 3, 
        scale: 1.05 
      }}
      whileTap={{ scale: 0.95 }}
    />
  );
};
