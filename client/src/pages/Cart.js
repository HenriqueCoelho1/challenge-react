import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Card } from 'react-bootstrap'

const Cart = ({ cartItems, handleProduct }) => {
    console.log("CART ITEMS", cartItems)
    return (
        <>

            <Row>
                {cartItems && cartItems.map(product => (
                    <>
                        <Col key={product._id} sm={12} md={4} lg={4} xl={3}>
                            <Card className="my-3 p-3 rounded">

                                {/* <h1>{product.name}</h1> */}
                                <Link to={`/product/${product._id}`}>
                                    <Card.Img src={product.image} variant="top" />
                                </Link>

                                <Card.Body>
                                    <Link to={`/product/${product._id}`}>
                                        <Card.Title as="div">
                                            <strong>{product.name.length > 25 ? product.name.slice(0, 23) + "..." : product.name}</strong>
                                        </Card.Title>
                                    </Link>


                                    <Card.Text as="div">
                                        <div className="py-3">
                                            Product score:<p className="text-info">{product.score}</p>
                                        </div>
                                    </Card.Text>


                                    <Card.Text as="h3">${product.price}</Card.Text>

                                    <button onClick={() => handleProduct(product)} className="btn-block">Add To Cart</button>

                                </Card.Body>

                            </Card>
                        </Col>
                        <Row>
                            <Col sm={12} md={6} lg={4} xl={3}>

                                teste
                            </Col>
                        </Row>
                    </>
                ))}
            </Row>
        </>
    )
}

export default Cart
