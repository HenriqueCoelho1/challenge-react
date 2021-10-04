import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const { Brand, Toggle, Collapse } = Navbar
const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Brand href="#">Game Shop</Brand>
                    <Toggle aria-controls="basic-navbar-nav" />
                    <Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
