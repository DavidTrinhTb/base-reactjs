import { useEffect } from 'react';

export default function useReloadOnChange(onDataChange: boolean) {
  useEffect(() => {
    window.onbeforeunload = (event) => {
      if (onDataChange) {
        const e = event || window.event;
        // Cancel the event

        if (e) {
          e.preventDefault();
          e.returnValue = ''; // Legacy method for cross browser support
        }
        return ''; // Legacy method for cross browser support
      }
    };

    return () => {
      window.removeEventListener('onbeforeunload', () => {});
    };
  }, [onDataChange]);
}
