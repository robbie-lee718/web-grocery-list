import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export function useGrocery() {
  const [items, setItems] = useLocalStorage('grocery_items', []);
  const [inputValue, setInputValue] = useState('');

  const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = useLocalStorage('grocery_dark_mode', getSystemTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newItem = {
      id: Date.now(),
      name: inputValue,
      completed: false,
    };

    setItems([...items, newItem]);
    setInputValue('');
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    setItems([]);
  };

  return { items, inputValue, isDarkMode, setIsDarkMode, setInputValue, handleAddItem, toggleItem, deleteItem, handleClearList, localStorage };
}