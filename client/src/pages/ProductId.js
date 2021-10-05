import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Cart, Button } from 'react-bootstrap'
import products from '../data/products'

const Product = ({ match }) => {
    const productMatchId = match.params.id
    const product = products.find(p => p._id === parseInt(productMatchId))
    return (
        <>
            <Link className="btn btn-dark rounded my-3" to="/">Go back</Link>

            <Row className="pt-3">
                <Col md={2}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={10}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Score</h5><p className="text-info">{product.score}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Price</h5>${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="btn-block" type="button">Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default Product
