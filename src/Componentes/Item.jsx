import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

function Item ({ item }) {
    return (
        <Col key={item.id} className='mt-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>Categoria: {item.category}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver detalle</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Item