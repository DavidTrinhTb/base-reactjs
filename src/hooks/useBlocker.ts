import { useCallback, useEffect } from 'react';
import {
  unstable_BlockerFunction as BlockerFunction,
  unstable_useBlocker as useBlocker,
  useBeforeUnload as _useBeforeUnload,
} from 'react-router-dom';

export const usePrompt = (doBlock = false, message: string) => {
  _useBeforeUnload(
    useCallback(
      (e) => {
        if (doBlock) {
          e.preventDefault();
          return (e.returnValue = message);
        }
      },
      [doBlock],
    ),
  );

  const shouldBlock = useCallback<BlockerFunction>(
    ({ currentLocation, nextLocation }) => doBlock && currentLocation.pathname !== nextLocation.pathname,
    [doBlock],
  );
  const blocker = useBlocker(shouldBlock);

  useEffect(() => {
    if (blocker.state === 'blocked' && !doBlock) {
      blocker.reset();
    }
  }, [blocker, doBlock]);

  //   _usePrompt({
  //     when: doBlock,
  //     message,
  //   });

  return {
    blocker,
  };
};

export default usePrompt;
