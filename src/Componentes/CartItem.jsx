import { Button, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItem({ item }) {
    const { removeItem } = useContext(CartContext);

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span>{item.title} - ${item.price} x {item.qty}</span>
            <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                🗑️
            </Button>
        </ListGroup.Item>
    );
}

export default CartItem;