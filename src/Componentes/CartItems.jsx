import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem";
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router';

function CartItems({ items }) {

    const { getTotal } = useContext(CartContext)



    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <ListGroup className='w-50'>
                {items.map(item => (
                    <CartItem item={item} key={item.id} />
                ))}
            </ListGroup>
            <hr />
            <strong >Total: ${getTotal()}</strong>
            <Button as={Link} to="/checkOut" variant='success' className='mt-3'>Finalizar Compra🎉</Button>
        </div>
    )
}

export default CartItems