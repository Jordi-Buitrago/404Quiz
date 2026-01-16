import { FadeIn } from '../animations/FadeIn';
import { PrimaryButton } from '../ui/PrimaryButton';
import { DownloadButton } from '../ui/DownloadButton';
import { PaperTape } from '../ui/PaperTape';
import { motion as Motion } from 'framer-motion';

export const DigitalCard = ({ onNext }) => {
  return (
    <div className="screen-container">
      <div className="floating-heart text-4xl" style={{ top: '10%', left: '8%', animationDelay: '0s' }}>💖</div>
      <div className="floating-star text-3xl" style={{ top: '20%', right: '12%', animationDelay: '0.5s' }}>⭐</div>
      <div className="floating-heart text-4xl" style={{ bottom: '18%', left: '15%', animationDelay: '1s' }}>💗</div>
      <div className="floating-star text-3xl" style={{ bottom: '28%', right: '8%', animationDelay: '1.5s' }}>✨</div>
      <div className="floating-heart text-2xl" style={{ top: '35%', left: '5%', animationDelay: '0.8s' }}>💝</div>
      <div className="floating-star text-2xl" style={{ bottom: '35%', right: '12%', animationDelay: '1.2s' }}>🌟</div>
      
      <FadeIn>
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className="relative mb-8"
        >
          <div 
            className="paper-cutout paper-texture p-12 md:p-16 max-w-3xl w-full text-center"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#4A4A4A',
            }}
          >
            <PaperTape position="top-left" color="yellow" />
            <PaperTape position="top-right" color="green" />
            
            <div className="text-5xl mb-6">🖊️🌈🧽</div>
            <h2 className="text-2xl md:text-3xl mb-8">
              Tu primer kit de maestra
            </h2>
            
            <div className="space-y-4 text-lg text-center leading-relaxed mb-8">
              <p className="flex items-center justify-center gap-3">
                <span className="text-2xl">🖊</span> Para enseñar
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-2xl">🌈</span> Para animar
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-2xl">🧽</span> Para volver a intentarlo
              </p>
            </div>
            
            <blockquote className="mt-8 pt-6 px-4 md:px-8 border-t-2 border-[#FFB6C1] italic text-base md:text-lg leading-relaxed">
              "Porque los niños no aprenden sin equivocarse…
              <br />y las mejores maestras lo saben."
            </blockquote>
          </div>
        </Motion.div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DownloadButton filename="kit.pdf" />
          <PrimaryButton onClick={onNext}>
            ¡Está listo! 🎉
          </PrimaryButton>
        </div>
      </FadeIn>
    </div>
  );
};
