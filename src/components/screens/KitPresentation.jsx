import { FadeIn } from '../animations/FadeIn';
import { ToolCard } from '../cards/ToolCard';
import { PrimaryButton } from '../ui/PrimaryButton';
import { PaperTape } from '../ui/PaperTape';
import { motion as Motion } from 'framer-motion';

const TOOL_CARDS = [
  { id: 1, name: 'Bolígrafo rojo', icon: '🖊️', description: 'Para enseñar', color: 'bg-[#FFB6C1]' },
  { id: 2, name: 'Pegatina divertida', icon: '⭐', description: 'Para animar', color: 'bg-[#FFE4B5]' },
  { id: 3, name: 'Goma de borrar divertida', icon: '🧽', description: 'Para volver a intentarlo', color: 'bg-[#87CEEB]' },
];

export const KitPresentation = ({ onNext }) => {
  return (
    <div className="screen-container">
      <div className="floating-shape text-4xl" style={{ top: '10%', left: '8%', animationDelay: '0s' }}>🔴</div>
      <div className="floating-shape text-3xl" style={{ top: '20%', right: '12%', animationDelay: '0.4s' }}>🟡</div>
      <div className="floating-shape text-4xl" style={{ top: '30%', left: '5%', animationDelay: '0.8s' }}>🟢</div>
      <div className="floating-shape text-3xl" style={{ bottom: '25%', right: '10%', animationDelay: '1.2s' }}>🔵</div>
      
      <div className="floating-icon text-3xl" style={{ top: '15%', left: '15%', animationDelay: '0.2s' }}>🖍️</div>
      <div className="floating-icon text-4xl" style={{ bottom: '20%', left: '20%', animationDelay: '0.6s' }}>✂️</div>
      <div className="floating-icon text-3xl" style={{ bottom: '30%', right: '15%', animationDelay: '1.0s' }}>📐</div>
      
      <FadeIn>
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <Motion.div 
            className="relative"
            initial={{ scale: 0.9, rotate: -2 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ rotate: 1 }}
          >
            <div 
              className="paper-cutout paper-texture p-16 md:p-20 text-center"
              style={{ 
                backgroundColor: '#FFFFFF',
                color: '#4A4A4A',
              }}
            >
              <PaperTape position="top-left" color="pink" />
              <PaperTape position="top-right" color="blue" />
              
              <h2 className="text-2xl md:text-4xl relative z-10">
                Y toda buena maestra necesita sus primeras herramientas.
              </h2>
            </div>
          </Motion.div>
        </Motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl w-full px-4">
          {TOOL_CARDS.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              {...tool} 
              delay={index * 200} 
            />
          ))}
        </div>
        
        <PrimaryButton onClick={onNext}>
          Continuar →
        </PrimaryButton>
      </FadeIn>
    </div>
  );
};
