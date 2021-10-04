import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'


const { Brand, Toggle, Collapse } = Navbar
const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Brand>Game Shop</Brand>
                    </LinkContainer>
                    <Toggle aria-controls="basic-navbar-nav" />
                    <Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
