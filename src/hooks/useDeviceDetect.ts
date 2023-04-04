import { useEffect, useState } from 'react';

// Tailwind current config
const DESKTOP_MIN_WIDTH = 1025;

export const useDeviceDetect = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > DESKTOP_MIN_WIDTH
  );
  const [widthScreen, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setIsDesktop(widthScreen >= DESKTOP_MIN_WIDTH);

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [widthScreen]);

  return { isDesktop };
};
