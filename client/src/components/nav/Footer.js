import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Made with love by <a href="http://github.com/HenriqueCoelho1">Henrique Coelho</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
