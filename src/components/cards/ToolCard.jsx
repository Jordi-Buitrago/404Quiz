import { motion as Motion } from 'framer-motion';
import { PaperTape } from '../ui/PaperTape';

export const ToolCard = ({ name, icon, description, delay = 0, color = 'bg-[#FFB6C1]' }) => {
  const getPaperColor = (bgColor) => {
    if (bgColor.includes('#FFB6C1')) return '#FF6B9D';
    if (bgColor.includes('#FFE4B5')) return '#FFB347';
    if (bgColor.includes('#87CEEB')) return '#4ECDC4';
    return '#FF6B9D';
  };

  const getTapeColor = (bgColor) => {
    if (bgColor.includes('#FFB6C1')) return 'yellow';
    if (bgColor.includes('#FFE4B5')) return 'blue';
    if (bgColor.includes('#87CEEB')) return 'pink';
    return 'green';
  };

  const paperColor = getPaperColor(color);
  const tapeColor = getTapeColor(color);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ scale: 1.02, rotate: [-1, 1, -1] }}
      className="relative"
    >
      <div 
        className="paper-cutout torn-edge-left paper-texture p-10 md:p-12 text-center cursor-default"
        style={{ 
          backgroundColor: paperColor,
          color: '#FFFFFF',
        }}
      >
        <div 
          className="paper-layer-behind"
          style={{ color: 'rgba(0, 0, 0, 0.2)' }}
        />
        
        <PaperTape position="top-left" color={tapeColor} />
        <PaperTape position="bottom-right" color={tapeColor} />
        
        <Motion.div
          className="text-6xl mb-4 relative z-10"
          animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, delay: delay / 1000 }}
        >
          {icon}
        </Motion.div>
        
        <h3 className="text-xl font-semibold mb-2 relative z-10" style={{ 
          color: '#FFFFFF',
          textShadow: '2px 2px 0 rgba(0, 0, 0, 0.2)',
          fontFamily: '"Pacifico", cursive',
        }}>
          {name}
        </h3>
        
        <p className="relative z-10" style={{ 
          color: 'rgba(255, 255, 255, 0.95)',
          textShadow: '1px 1px 0 rgba(0, 0, 0, 0.1)',
        }}>
          {description}
        </p>
      </div>
    </Motion.div>
  );
};
