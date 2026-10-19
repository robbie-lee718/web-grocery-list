export default function Form({ inputValue, setInputValue, onAdd }) {
    return (
        <form onSubmit={onAdd} className="grocery-form">
            <input
                type="text"
                placeholder="Add a grocery item..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='grocery-input'
            />
            <button type="submit" className="add-btn">Add</button>
        </form>
    );
}