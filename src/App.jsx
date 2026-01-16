import React from 'react';
import { useGiftFlow, SCREENS } from './hooks/useGiftFlow';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { KitPresentation } from './components/screens/KitPresentation';
import { DigitalCard } from './components/screens/DigitalCard';
import { CelebrationScreen } from './components/screens/CelebrationScreen';

function App() {
  const { currentScreen, nextScreen, reset } = useGiftFlow();

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.WELCOME:
        return <WelcomeScreen onNext={nextScreen} />;
      case SCREENS.KIT_PRESENTATION:
        return <KitPresentation onNext={nextScreen} />;
      case SCREENS.DIGITAL_CARD:
        return <DigitalCard onNext={nextScreen} />;
      case SCREENS.CELEBRATION:
        return <CelebrationScreen onReset={reset} />;
      default:
        return <WelcomeScreen onNext={nextScreen} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="rainbow-dots">
        <div className="rainbow-dot"></div>
        <div className="rainbow-dot"></div>
        <div className="rainbow-dot"></div>
        <div className="rainbow-dot"></div>
        <div className="rainbow-dot"></div>
      </div>
      
      {renderScreen()}
    </div>
  );
}

export default App;
