import { ClassNames } from '@emotion/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';

function Item ({ item }) {
    return (
        <Col className='mt-5'>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title className="text-uppercase, text-center"><h3>{item.title}</h3></Card.Title>
                <Card.Text className="text-center" style={{ fontWeight: 'bold' }}>${item.price}</Card.Text>
                <Button className="btn btn-outline-light d-flex justify-content-center" as={Link} to={`/item/${item.id}`}>Ver detalle</Button>
                
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Item