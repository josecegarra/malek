import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/Nav'

function Cartwidget() {
    const { getQuantity } = useContext(CartContext)
    return (
        <Nav.Link as={Link} to="/cart">
                    <Button variant="secondary">
                🛒 <Badge bg="dark">{getQuantity()}</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
        </Nav.Link>

    );
}

export default Cartwidget;