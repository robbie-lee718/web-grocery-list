import { useGrocery } from './hooks/useGrocery';
import SunIcon from './assets/Sun.svg?react';
import MoonIcon from './assets/Moon.svg?react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

export default function App() {
  const {
    items,
    inputValue,
    isDarkMode,
    setIsDarkMode,
    setInputValue,
    handleAddItem,
    toggleItem,
    deleteItem,
    handleClearList
  } = useGrocery();


  return (
    <div className={`grocery-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="theme-toggle-btn"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <SunIcon className="theme-icon" /> : <MoonIcon className="theme-icon" />}
      </button>

      <h1>Groceries</h1>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAdd={handleAddItem}
      />
      <List
        items={items}
        onToggle={toggleItem}
        onDelete={deleteItem}
      />

      {items.length > 0 && (
        <button onClick={handleClearList} className="clear-btn">
          Clear List
        </button>
      )}
    </div>
  )
}
