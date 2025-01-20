import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';

function ItemDetail({ item }) {
    return (
        <div className="p-5">
            <Card border="dark" style={{ width: '25rem' }} className="rounded mx-auto d-block">
                <Card.Header><img src={item?.img} className="mx-auto d-block" alt={item?.title} style={{ width: 300, height: 300 }} /></Card.Header>
                <Card.Body>
                    <Card.Title className="text-center"><h3>{item?.title}</h3></Card.Title>
                    <Card.Text className="text-center" style={{ fontWeight: 'bold' }}>${item?.price}</Card.Text>
                    <ItemCount item={item} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail;



