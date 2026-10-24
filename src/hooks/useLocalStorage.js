import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      
      // If nothing is saved, or it's literally the string "undefined" or "null"
      if (saved === null || saved === 'undefined' || saved === 'null') {
        return initialValue;
      }
      
      return JSON.parse(saved);
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      return initialValue; // Fallback safely if JSON is corrupted
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}