import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './CartWidget';
import { Link } from 'react-router';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Malek</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/beauty">Beauty</Nav.Link>
                        <Nav.Link as={Link} to="/category/fragrances">Fragrances</Nav.Link>
                        <Nav.Link as={Link} to="/category/furniture">Furniture</Nav.Link>
                        <Nav.Link as={Link} to="/category/groceries">Groceries</Nav.Link>
                    </Nav>
                    <Cartwidget/>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;