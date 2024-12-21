import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

function Item ({ item }) {
    return (
        <Col key={item.id} className='mt-5'>
        <Card border="dark" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title><h3>{item.title}</h3></Card.Title>
                <Card.Title className="text-uppercase"><h5>Category: {item.category}</h5> </Card.Title>
                <Card.Text className="text-center">{item.description}</Card.Text>
                <Button className="btn btn-outline-light" as={Link} to={`/item/${item.id}`}>Ver detalle</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Item