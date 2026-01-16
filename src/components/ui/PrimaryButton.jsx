import { motion as Motion } from 'framer-motion';

export const PrimaryButton = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <Motion.button
      onClick={onClick}
      disabled={disabled}
      className={`btn-primary ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { 
        scale: 1.05,
        x: -2,
        y: -2
      } : {}}
      whileTap={!disabled ? { 
        x: 2,
        y: 2
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Motion.button>
  );
};
