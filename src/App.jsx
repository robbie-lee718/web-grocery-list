import { useGrocery } from './hooks/useGrocery';
import Form from './components/Form';
import List from './components/List';
import './App.css';

export default function App() {
  const {
    items,
    inputValue,
    setInputValue,
    handleAddItem,
    toggleItem,
    deleteItem,
    handleClearList
  } = useGrocery();

  return (
    <div className='grocery-container'>
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
