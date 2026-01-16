import { useState, useCallback } from 'react';

export const SCREENS = {
  WELCOME: 'welcome',
  KIT_PRESENTATION: 'kit_presentation',
  DIGITAL_CARD: 'digital_card',
  CELEBRATION: 'celebration',
};

export const useGiftFlow = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.WELCOME);

  const nextScreen = useCallback(() => {
    const screenOrder = Object.values(SCREENS);
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex < screenOrder.length - 1) {
      setCurrentScreen(screenOrder[currentIndex + 1]);
    }
  }, [currentScreen]);

  const reset = useCallback(() => {
    setCurrentScreen(SCREENS.WELCOME);
  }, []);

  const goToScreen = useCallback((screen) => {
    setCurrentScreen(screen);
  }, []);

  return {
    currentScreen,
    nextScreen,
    reset,
    goToScreen,
    SCREENS,
  };
};
