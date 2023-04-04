/* eslint-disable no-console */
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>, VoidFunction] {
  const readValue = useCallback((): T => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue: SetValue<T> = (value) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;

      window.sessionStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.warn(`Error setting sessionStorage key “${key}”:`, error);
    }
  };

  const clearStoraged = () => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.warn(`Error remove sessionStorage key “${key}”:`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue]);

  return [storedValue, setValue, clearStoraged];
}

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    return undefined;
  }
}
