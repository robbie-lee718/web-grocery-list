export default function Item({ item, onToggle, onDelete }) {
  return (
    <li key={item.id} className={`grocery-item ${item.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(item.id)} className="item-name">
        {item.name}
      </span>
      <button onClick={() => onDelete(item.id)} className="delete-btn">
        ✕
      </button>
    </li>
  );
}