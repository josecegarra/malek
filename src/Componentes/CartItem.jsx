import ListGroup from "react-bootstrap/ListGroup";

function CartItem ({ item }) {
    return (
        <ListGroup.Item>{item.title} x {item.qty}</ListGroup.Item>
    )
}

export default CartItem