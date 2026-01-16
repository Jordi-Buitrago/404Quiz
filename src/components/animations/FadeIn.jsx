import { motion as Motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </Motion.div>
  );
};
