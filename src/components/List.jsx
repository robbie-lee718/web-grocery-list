import Item from "./Item";

export default function List({ items, onToggle, onDelete }) {
    if (items.length === 0) {
        return <p className='empty-text'>Your Grocery List is Empty!</p>
    }

    return (
        <ul className="grocery-list">
            {items.map((item) => (
                <Item
                    key={items.id}
                    item={item}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}