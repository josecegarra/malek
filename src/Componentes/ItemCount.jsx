import { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';

function ItemCount ( { item } ) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleAddToCart = () => {
        addToCart({...item, qty: count})
    }

    return (
        <div>
            <button onClick={handleAdd} className="btn btn-outline-secondary">+</button>
            <button className="btn btn-outline-secondary">{count}</button>
            <button onClick={handleSubtract} disabled={count < 1} className="btn btn-outline-secondary">-</button>
            <button onClick={handleReset} disabled={count < 1} className="btn btn-outline-secondary">🗑️</button>
            <button onClick={handleAddToCart} disabled={count < 1} className="btn btn-outline-secondary">Add to cart</button>
        </div>
    )
}

export default ItemCount;