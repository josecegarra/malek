import { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2';

function ItemCount ( { item } ) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => {
        if (count < item.stock) {
            setCount(count + 1);
        } else {
            Swal.fire({
                icon: "error",
                title: "Stock insuficiente",
                text: `Solo hay ${item.stock} unidades disponibles de ${item.title}.`,
            });
        }
    };

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleAddToCart = () => {
        if (count > item.stock) {
            Swal.fire({
                icon: "error",
                title: "Stock insuficiente",
                text: `Solo hay ${item.stock} unidades disponibles de ${item.name}.`,
            });
        } else if (count < 1) {
            Swal.fire({
                icon: "warning",
                title: "Cantidad no válida",
                text: "Por favor, selecciona una cantidad mayor a 0.",
            });
        } else {
            addToCart({ ...item, qty: count });
        }
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