import { useState } from 'react';

function ItemCount () {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <button onClick={handleAdd} className="btn btn-outline-secondary">+</button>
            <button className="btn btn-outline-secondary">{count}</button>
            <button onClick={handleSubtract} className="btn btn-outline-secondary">-</button>
            <button onClick={handleReset} className="btn btn-outline-secondary">🗑️</button>
            <button className="btn btn-outline-secondary">Add to cart</button>
        </div>
    )
}

export default ItemCount;