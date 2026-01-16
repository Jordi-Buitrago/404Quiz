import { FadeIn } from '../animations/FadeIn';
import { PrimaryButton } from '../ui/PrimaryButton';
import { PaperTape } from '../ui/PaperTape';
import { motion as Motion } from 'framer-motion';

export const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="screen-container">
      <div className="floating-cloud text-5xl" style={{ top: '8%', left: '5%', animationDelay: '0s' }}>☁️</div>
      <div className="floating-cloud text-6xl" style={{ top: '12%', right: '8%', animationDelay: '0.5s' }}>☁️</div>
      <div className="floating-cloud text-4xl" style={{ bottom: '10%', left: '12%', animationDelay: '1s' }}>☁️</div>
      
      <div className="floating-icon text-4xl" style={{ top: '15%', left: '15%', animationDelay: '0.2s' }}>📚</div>
      <div className="floating-icon text-3xl" style={{ top: '25%', right: '12%', animationDelay: '0.7s' }}>✏️</div>
      <div className="floating-icon text-4xl" style={{ bottom: '20%', left: '20%', animationDelay: '1.2s' }}>🍎</div>
      <div className="floating-icon text-3xl" style={{ bottom: '30%', right: '15%', animationDelay: '1.7s' }}>🎓</div>
      
      <FadeIn>
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div 
            className="paper-cutout paper-texture p-12 md:p-16 max-w-2xl w-full text-center"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#4A4A4A',
            }}
          >
            <PaperTape position="top-left" color="blue" />
            <PaperTape position="top-right" color="pink" />
            
            <Motion.div
              className="text-6xl mb-6"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🎓✨
            </Motion.div>
            <h1 className="text-3xl md:text-5xl mb-6">
              ¡Felicidades, futuras maestras!
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Hoy no celebramos que acabáis exámenes.
              <br />
              Celebramos que vais a empezar a enseñar de verdad.
            </p>
            <PrimaryButton onClick={onNext}>
              Ver tu regalo 🎁
            </PrimaryButton>
          </div>
        </Motion.div>
      </FadeIn>
    </div>
  );
};
