import { useCallback, useEffect, useRef, useState } from 'react';

type CallBackType<T> = (updatedValue: T) => void;
type StateType<T> = T | ((prev: T) => T);
type ReturnType = <T>(initialValue: T | (() => T)) => [T, (newValue: StateType<T>, callback?: CallBackType<T>) => void];

const useCallbackState: ReturnType = <T>(initialValue: T | (() => T)) => {
  const callbackQueue = useRef<CallBackType<T>[]>([]);

  const [state, _setState] = useState<T>(initialValue);

  useEffect(() => {
    callbackQueue.current.forEach((cb) => cb(state));
    callbackQueue.current = [];
  }, [state]);

  const setState = useCallback((newValue: StateType<T>, callback?: CallBackType<T>) => {
    _setState(newValue);

    if (callback && typeof callback === 'function') {
      callbackQueue.current.push(callback);
    }
  }, []);

  return [state, setState];
};

export default useCallbackState;
