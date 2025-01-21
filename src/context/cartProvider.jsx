import { CartContext } from "./cartContext";
import { useState } from 'react';

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {

        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...item, qty: 1 }]);
        }
    }


    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }

    const getQuantity = () => {
        const quantities = cart.map(item => item.qty)
        const totalProducts = quantities.reduce((acc, current) => acc + current, 0)

        return totalProducts
    }

    const getTotal = () => {
        const quantities = cart.map(item => item.qty * item.price)
        const totalBuy = quantities.reduce((acc, current) => acc + current, 0)

        return totalBuy
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getQuantity, getTotal, removeItem }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider