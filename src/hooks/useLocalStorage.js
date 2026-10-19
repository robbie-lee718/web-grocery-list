import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  // 1. Lazy state initialization
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  // 2. Sync to localStorage when value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}