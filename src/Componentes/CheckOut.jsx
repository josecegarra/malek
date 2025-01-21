import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { createOrder } from '../firebase/db';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function CheckOut() {
    const { getTotal, cart } = useContext(CartContext)
    const navigate = useNavigate();

    const showID = (id) => {
        Swal.fire({
            title: `El ID de tu compra es: ${id}`,
            icon: "success",
            draggable: true
        }) .then(() => {
            navigate("/");
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const [email, phone, address, name, city] = form

        const order = {
            buyer: { email: email.value, phone: phone.value, address: address.value, name: name.value, city: city.value },
            total: getTotal(),
            items: cart,
            time: serverTimestamp(),
        }

        try {
            const id = await createOrder(order);
            showID(id);
        } catch (error) {
        }

    }


    return (
        <Form className='mt-5 d-flex flex-column align-items-center' onSubmit={handleSubmit}>

            <Row className="mb-3">

                <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Malek@example.com" required />
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <Form.Label>Number Phone</Form.Label>
                    <Form.Control type="phone" placeholder="+5491112345678" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name and Surname</Form.Label>
                    <Form.Control placeholder="Name and Surname" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="9 of July 1234" required />
                </Form.Group>

                <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Buenos Aires" required />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Terms and conditions" required />
            </Form.Group>

            <Button variant="success" type="submit">
                Completar compra 🎉
            </Button>
        </Form>
    );
}



export default CheckOut;