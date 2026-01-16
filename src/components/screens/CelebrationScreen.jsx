import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { FadeIn } from '../animations/FadeIn';
import { PrimaryButton } from '../ui/PrimaryButton';
import { PaperTape } from '../ui/PaperTape';
import { useConfetti } from '../../hooks/useConfetti';
import { motion as Motion } from 'framer-motion';

export const CelebrationScreen = ({ onReset }) => {
  const { getInstance, fire } = useConfetti();

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <div className="screen-container relative">
      <div className="floating-icon text-5xl" style={{ top: '8%', left: '5%', animationDelay: '0s' }}>🎉</div>
      <div className="floating-icon text-4xl" style={{ top: '15%', right: '10%', animationDelay: '0.3s' }}>🎊</div>
      <div className="floating-icon text-5xl" style={{ top: '25%', left: '12%', animationDelay: '0.6s' }}>🎈</div>
      <div className="floating-icon text-4xl" style={{ bottom: '30%', right: '8%', animationDelay: '0.9s' }}>🎁</div>
      <div className="floating-icon text-3xl" style={{ top: '35%', left: '8%', animationDelay: '1.2s' }}>🎊</div>
      <div className="floating-icon text-3xl" style={{ bottom: '15%', left: '15%', animationDelay: '1.5s' }}>🎉</div>
      
      <ReactCanvasConfetti 
        refConfetti={getInstance} 
        className="fixed inset-0 pointer-events-none" 
      />
      
      <FadeIn>
        <Motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200, delay: 0.2 }}
          className="relative"
        >
          <div 
            className="paper-cutout paper-texture p-12 md:p-16 max-w-2xl w-full text-center"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#4A4A4A',
            }}
          >
            <PaperTape position="top-left" color="pink" />
            <PaperTape position="top-right" color="yellow" />
            
            <Motion.div
              className="text-6xl md:text-7xl mb-6"
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉🎊🎈
            </Motion.div>
            <h2 className="text-4xl md:text-5xl mb-6">
              ¡Felicidades!
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Tu kit está listo para usar
            </p>
            <PrimaryButton onClick={onReset}>
              🔄 Ver de nuevo
            </PrimaryButton>
          </div>
        </Motion.div>
      </FadeIn>
    </div>
  );
};
