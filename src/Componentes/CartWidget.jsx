import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Cartwidget() {
    return (
        <Button variant="secondary">
            🛒 <Badge bg="dark">9</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    );
}

export default Cartwidget;