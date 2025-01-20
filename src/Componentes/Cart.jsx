import CartItems from './CartItems'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import Alert from 'react-bootstrap/Alert'

function Cart () {
    const { cart } = useContext(CartContext)

    if (cart.length == 0) {
        return (
            <>
                {['warning'].map((variant) =>(
                    <Alert key={variant} variant={variant}>
                        No tienes productos agregador al carrito😿. Ve al {' '}
                        <Alert.Link href='/'>Inicio</Alert.Link> y agrega el producto que desees.
                    </Alert>
                ))}
            </>
        );
    }

    return (
        <div>
            <CartItems items={cart} />
        </div>
    )
}

export default Cart